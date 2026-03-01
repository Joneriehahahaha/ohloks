<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="projectData.projectDetails.singleProjectHeader" />

		<!-- Project gallery -->
		<div class="flex justify-center px-4 mt-8">
			<div class="w-full max-w-[1000px] relative">
				<img 
					:src="projectData.img"
					:alt="projectData.title"
					class="w-full h-[500px] object-cover rounded-xl shadow-lg"
				/>
				<div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
					<h2 class="text-white text-3xl font-bold mb-2">{{ projectData.title }}</h2>
					<p class="text-white/90 text-lg">{{ projectData.category }}</p>
				</div>
			</div>
		</div>

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';

export default {
	name: 'CloneUI',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data() {
		const projectData = projects.find(p => p.title === 'Clone UI Design');
		
		return {
			projectData,
			projectInfo: projectData.projectDetails,
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

<style scoped></style>