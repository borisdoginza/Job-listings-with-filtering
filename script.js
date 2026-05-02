




let jobs = []; 
let activeFilters = [];

async function loadJobs() {
    const response = await fetch('./data.json');
    jobs = await response.json();
    console.log(jobs)
    renderJobs();
}

function renderJobs () {
    const container = document.getElementById('jobs');
    container.innerHTML = getFilteredJobs().map(job => createCard(job)).join('');
    renderFilters();
}

function getFilteredJobs(){
    if (activeFilters.length === 0) return jobs;

    return jobs.filter(job => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        return activeFilters.every(filter => jobTags.includes(filter));
    });
}

function renderFilters(){
    const root = document.querySelector('.container');
    const filters = document.querySelector('.filters');

    if (activeFilters.length === 0) {
        root.classList.add('hidden');
        return
    }
    root.classList.remove('hidden');
    filters.innerHTML = `
        ${activeFilters.map(f => `
            <div class=" flex flex-row bg-green-50 rounded-lg">
                <span class=" text-green-400 px-4 py-1 rounded-full font-bold">${f}</span>
                <div class="w-8 h-8 bg-green-400 hover:bg-black transition-all duration-100 ease-in-out rounded-r-lg flex items-center justify-center">
                    <button onclick="toggleFilter('${f}')" class="text-green-50 text-[24px]">
                    
                    <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#FFF"></path>
                    </svg></button>
                </div>
            </div>
            `).join('')}
    `;

}



function toggleFilter(tag){
    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter (f => f !== tag);

    }
    else {
        activeFilters.push(tag);
    }
    renderJobs();
}

function clearFilters(){
    activeFilters = [];
    renderJobs();
}



function createCard(job) {
    return `
        <div class="bg-white rounded-lg shadow-xl transition-all duration-200 ease-in-out flex flex-col h-64.75 lg:h-38 lg:items-center lg:flex-row lg:w-full lg:justify-between lg:pt-0  relative px-4 pt-10 justify-items-start gap-2 md:pb-3 lg:pb-0 w-[clamp(336px,100%,360px)] ${job.featured ? 'border-l-6 border-green-400' : ''}"
        >
        <img src="${job.logo}" alt="${job.company}" class="transition-all duration-200 w-12 h-12 -top-5.75 rounded-full absolute left-[-16] lg:top-8 lg:left-6 lg:w-22 lg:h-22">
            
            <div class="flex flex-col gap-2 lg:pl-32 lg:pt-0">
            <div class="flex flex-row items-center gap-4">
                <span class="text-green-400 font-bold transition-all duration-1200">${job.company}</span>
                ${job.new ? '<span class="bg-green-400 font-bold text-white text-xs px-2 py-1 rounded-full transition-all duration-1200">NEW!</span>' : ''}
                ${job.featured ? '<span class="bg-green-900 font-bold text-white text-xs px-2 py-1 rounded-full transition-all duration-1200">FEATURED</span>' : ''}    
            </div>   
            
            <h2 class="font-bold text-lg hover:text-green-400 transition-text duration-100 cursor-pointer">${job.position}</h2>

            <div class="flex flex-row gap-2 mb-2 pb-0">
                <span class="text-gray-400">${job.postedAt}</span>
                <span class="text-gray-300">•</span>
                <span class="text-gray-400">${job.contract}</span>
                <span class="text-gray-300">•</span>
                <span class="text-gray-400">${job.location}</span>
            </div>
            <div class="w-full h-0.5 bg-gray-200 lg:hidden mb-1"></div>
        </div>

            <div class="flex gap-2 flex-wrap lg:flex-row lg:h-10">
                <span onclick="toggleFilter('${job.role}')" class="
                ${activeFilters.includes(job.role)
                    ? 'bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50'
                    : 'text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50'
                }
                 font-bold  px-4 py-2 rounded  transition-all duration-100 cursor-pointer">${job.role}</span>
                <span onclick="toggleFilter('${job.level}')" class="
                ${activeFilters.includes(job.level)
                    ? 'bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50'
                    : 'text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50'
                }

                 font-bold  px-4 py-2 rounded  transition-all duration-100 cursor-pointer">${job.level}</span>
                ${job.languages.map(lang => `
                    <span onclick="toggleFilter('${lang}')" class="
                    ${activeFilters.includes(lang)
                        ? 'bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50'
                        : 'text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50'
                    }
                     font-bold  px-4 py-2 rounded transition-all duration-100 cursor-pointer">${lang}</span>
                    `).join('')}
                ${job.tools.map(tool => `
                    <span onclick="toggleFilter('${tool}')" class="
                    ${activeFilters.includes(tool)
                        ? 'bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50'
                        : 'text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50'
                    }
                    font-bold  px-4 py-2 rounded transition-all duration-100 cursor-pointer">${tool}</span>
                    `).join('')}
                
            </div>
        </div>            
    `   
}





const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearFilters);







loadJobs();

