<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
		data: () => {
		return {
			videoMuted: true,
			singleProjectHeader: {
				singleProjectTitle: 'My Personal Website',
				singleProjectDate: 'March 01, 2026',
				singleProjectTag: 'Kryslee Miano',
			},
			projectImages: [
				{
					id: 1,
					title: 'MY Personal Website @Kryless Miano',
					video: require('@/assets/images/mickyvid.mp4'),
				}
			],
			projectInfo: {
				clientHeading: 'Project Info',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Kryslee Miano',
					},
					{
						id: 2,
						title: 'Project Title',
						details: 'Personal Portfolio Website',
					},
					{
						id: 3,
						title: 'Project Type',
						details: 'Personal / Academic Website',
					},
					{
						id: 4,
						title: 'Status',
						details: 'In Development',
					}
				],
				objectivesHeading: 'Objective',
				objectivesDetails: [
					{
						id: 1,
						details: 'Primary Objective:',
						description: 'To create a visually appealing and user-friendly personal website that showcases my profile, skills, activities, and creative work.'
					},
					
				],
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'And Secret maka bala ka sa sauce',
							
						],
					},
				],
				projectDetailsHeading: 'MY PERSONAL WEBSITE',
				projectDetails: [
					{
						id: 1,
						details:
							'Hello! Good day! My name is Kryslee Miano. This is my personal website created for a school project. On this homepage, you can see my picture, listen to a short explanation about this page, and watch a short video of my recent activities. Thank you for visiting!',
					},
					{
						id: 12,
						details:
							'On this homepage, you’ll find a photo of me, a short audio introduction where I explain the purpose of this site, and a brief video highlighting some of my recent activities. This website reflects my creativity, skills, and experiences, and I’m excited to share it with you.'
					},
					{
						id: 13,
						details:
							'Thank you for taking the time to visit my page. I hope you enjoy exploring it!'
					},
						
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://https://www.facebook.com/mickeymiano',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://www.facebook.com/mickeymiano',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://www.facebook.com/mickeymiano',
					},
					
				],
			},
			relatedProject: {
				relatedProjectsHeading: '',
				relatedProjects: [
					
					
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
		toggleVideoMute() {
			this.videoMuted = !this.videoMuted;
		},
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- My Picture Section -->
		<div class="flex flex-col items-center mt-16 max-w-6xl mx-auto px-4">
			<h2 class="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
				My Picture
			</h2>
			<img
				src="@/assets/images/micky.jpg"
				alt="My picture"
				class="max-w-xs w-full rounded-lg shadow-lg object-cover"
			/>
			<p class="mt-6 text-center text-ternary-dark dark:text-ternary-light max-w-2xl">
				Hello! Good day! My name is Kryslee Miano. This is my personal website created for a school project. On this homepage, you can see my picture, listen to a short explanation about this page, and watch a short video of my recent activities. Thank you for visiting!
			</p>
			<audio
				controls
				class="mt-8 w-full max-w-lg"
				:src="require('@/assets/images/mickyaudio.mp3')"
			>
				Your browser does not support the audio element.
			</audio>
		</div>

		<!-- Enhanced Project Gallery - Single Image -->
		<div class="mt-24 max-w-6xl mx-auto px-4">
			<!-- Main Project Media (Video or Image) -->
			<div class="relative group">
				<div class="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg bg-black/60 text-white font-semibold">
					My Activity Before
				</div>
				<video
					v-if="projectImages[0].video"
					:src="projectImages[0].video"
					autoplay
					:muted="videoMuted"
					loop
					playsinline
					class="rounded-2xl shadow-xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
				/>
				<button
					v-if="projectImages[0].video"
					@click="toggleVideoMute"
					class="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
					:title="videoMuted ? 'Unmute' : 'Mute'"
					aria-label="Toggle sound"
				>
					<svg v-if="videoMuted" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
						<line x1="23" y1="9" x2="17" y2="15"/>
						<line x1="17" y1="9" x2="23" y2="15"/>
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
						<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
					</svg>
				</button>
				<img
					v-else
					:src="projectImages[0].img"
					:alt="projectImages[0].title"
					class="rounded-2xl shadow-xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
				/>
				<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-2xl">
					<h3 class="text-2xl font-bold text-white mb-2">
						{{ projectImages[0].title }}
					</h3>
					<p class="text-gray-200">
						my personal website created for a school project.
					</p>
				</div>
			</div>
		</div>

		<!-- Project Features Section -->
		<div class="mt-20 max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4"> </div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						
					</p>
				</div>
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4"> </div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						
					</p>
				</div>
				<div class="bg-secondary-light dark:bg-ternary-dark p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-dark dark:text-primary-light text-xl mb-4"> </div>
					<h3 class="text-lg font-bold text-ternary-dark dark:text-ternary-light mb-2">
						
					</h3>
					<p class="text-ternary-dark dark:text-ternary-light">
						
					</p>
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
.group:hover img,
.group:hover video {
	filter: brightness(1.05);
}
</style>
