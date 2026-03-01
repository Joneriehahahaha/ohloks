<script>
import projects from '../../data/projects';

export default {
	name: 'ProjectsGrid',
	props: {
		showSearch: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			projects: projects,
			searchProject: '',
			videoMuted: {}, // project.id -> true if muted
		};
	},
	methods: {
		toggleMute(projectId, event) {
			event.preventDefault();
			event.stopPropagation();
			this.videoMuted[projectId] = !this.isMuted(projectId);
		},
		isMuted(projectId) {
			return this.videoMuted[projectId] !== false;
		},
	},
	computed: {
		filteredProjects() {
			if (this.searchProject) {
				const searchTerm = this.searchProject.toLowerCase();
				return this.projects.filter(project => 
					project.title.toLowerCase().includes(searchTerm)
				);
			}
			return this.projects;
		},
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<!-- Search Control - Only shown when showSearch prop is true -->
		<div v-if="showSearch" class="max-w-3xl mx-auto px-4">
			<div class="flex justify-center mb-8">
				<input 
					v-model="searchProject"
					type="text"
					placeholder="Search projects..."
					class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
				/>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-6 sm:gap-10">
			<div v-for="project in filteredProjects" :key="project.id" 
				class="w-full max-w-sm rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white transform hover:-translate-y-1 transition-all duration-300"
			>
				<router-link :to="project.link" class="flex flex-col h-full">
					<!-- Project Image or Video -->
					<div class="relative overflow-hidden rounded-t-xl">
						<video
							v-if="project.video"
							:src="project.video"
							autoplay
							:muted="isMuted(project.id)"
							loop
							playsinline
							class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
						/>
						<button
							v-if="project.video"
							@click="toggleMute(project.id, $event)"
							class="absolute bottom-2 right-2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
							:title="isMuted(project.id) ? 'Unmute' : 'Mute'"
							aria-label="Toggle sound"
						>
							<svg v-if="isMuted(project.id)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
								<line x1="23" y1="9" x2="17" y2="15"/>
								<line x1="17" y1="9" x2="23" y2="15"/>
							</svg>
							<svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
								<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
							</svg>
						</button>
						<img
							v-else
							:src="project.img"
							:alt="project.title"
							class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
						/>
					</div>
					
					<!-- Project Info -->
					<div class="text-center px-4 py-6">
						<p class="font-general-medium text-xl text-[#0F172A] mb-2">
							{{ project.title }}
						</p>
						<span v-if="project.category" class="text-sm text-gray-500">
							{{ project.category }}
						</span>
					</div>
				</router-link>
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .grid {
        padding: 0 2rem;
    }
}

/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Fixed header styles */
.search-header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
