<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<div class="flex justify-center px-4 mt-8">
			<div class="w-full max-w-[1000px] relative">
				<img 
					:src="require('@/assets/images/paldo.jpg')"
					alt="Project Image"
					class="w-full h-[500px] object-cover rounded-xl shadow-lg"
				/>
				<div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
					<h2 class="text-white text-3xl font-bold mb-2">Pixel Gaming</h2>
					<p class="text-white/90 text-lg"> </p>
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

export default {
	name: 'Ohlok',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data() {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Pixel Management UI',
				singleProjectDate: 'Apr 7, 2024',
				singleProjectTag: 'Full Stack Developer',
			},
			projectImages: [
				{
					id: 1,
					title: 'Pixel Developer',
					img: require('@/assets/images/paldo.jpg'),
				},
				
			],
			projectInfo: {
				clientHeading: 'About Pixel',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'PixelGaming.xyz',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design & Full Stack Developer',
					},
					{
						id: 3,
						title: 'Github',
						details: 'https://github.com/joneriehahahaha',
					},
					{
						id: 4,
						title: 'Phone',
						details: '+63 9662540485',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails: 'Play pixel to earn money',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'AdobeXD',
						],
					},
				],
				projectDetailsHeading: 'An Infinite World of Endless',
				projectDetails: [
					{
						id: 1,
						details:
							'Pixel gaming has experienced a resurgence in popularity in recent years, partly due to nostalgia for retro gaming aesthetics and partly due to the accessibility of pixel art creation tools for indie developers. Many indie games, as well as some mainstream titles, employ pixel art to evoke a sense of nostalgia or to create unique visual styles.',
					},
					{
						id: 2,
						details:
							'Pixel gaming isn`t limited to a specific genre; it can encompass a wide range of game types, including platformers, RPGs, action-adventure games, puzzle games, and more. Some well-known examples of pixel art games include "Minecraft," "Stardew Valley," "Undertale," "Celeste," and "Hyper Light Drifter," among many others.'
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://www.instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://www.facebook.com/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: '',
				relatedProjects: [],
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