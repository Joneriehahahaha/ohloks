<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';

export default {
	name: 'DoubleProject',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data() {
		const projectData = projects.find(p => p.title === 'LGU Lagon Office Cordova');
		
		return {
			projectData,
			projectInfo: {
				...projectData.projectDetails,
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: projects.filter(p => p.id !== projectData.id).slice(0, 2),
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="projectData.projectDetails.singleProjectHeader" />

		<!-- Project gallery - Enhanced image display -->
		<div class="flex justify-center px-4 mt-8">
			<div class="w-full max-w-[1200px] relative">
				<div class="rounded-xl overflow-hidden shadow-2xl">
					<img 
						:src="projectData.img"
						:alt="projectData.title"
						class="w-full object-cover"
						style="height: 600px;"
					/>
				</div>
			</div>
		</div>

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped>
/* Enhanced image styling */
.rounded-xl {
    transition: all 0.3s ease-in-out;
}

.rounded-xl:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    backface-visibility: hidden;
}
</style>
