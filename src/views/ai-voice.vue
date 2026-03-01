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

		<!-- AI Features Cards -->
		<div class="grid md:grid-cols-3 gap-8 mt-16 px-4">
			<!-- Voice Recognition -->
			<div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
				<div class="text-center mb-4">
					<i data-feather="mic" class="w-12 h-12 mx-auto text-blue-500"></i>
				</div>
				<h3 class="text-xl font-bold text-center mb-2">Voice Recognition</h3>
				<p class="text-gray-600 text-center">
					Advanced speech recognition with multi-language support.
				</p>
			</div>

			<!-- Natural Language Processing -->
			<div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
				<div class="text-center mb-4">
					<i data-feather="cpu" class="w-12 h-12 mx-auto text-blue-500"></i>
				</div>
				<h3 class="text-xl font-bold text-center mb-2">NLP Processing</h3>
				<p class="text-gray-600 text-center">
					Intelligent natural language understanding and processing.
				</p>
			</div>

			<!-- Smart Integration -->
			<div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
				<div class="text-center mb-4">
					<i data-feather="settings" class="w-12 h-12 mx-auto text-blue-500"></i>
				</div>
				<h3 class="text-xl font-bold text-center mb-2">Smart Integration</h3>
				<p class="text-gray-600 text-center">
					Seamless integration with various devices and applications.
				</p>
			</div>
		</div>

		<!-- AI Capabilities Section -->
		<div class="mt-16 px-4">
			<div class="bg-gray-50 rounded-xl p-8">
				<h3 class="text-2xl font-bold text-center mb-8">AI Capabilities</h3>
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start space-x-4">
						<i data-feather="check-circle" class="w-6 h-6 text-green-500 flex-shrink-0"></i>
						<div>
							<h4 class="font-semibold mb-2">Multi-language Support</h4>
							<p class="text-gray-600">Support for multiple languages and dialects.</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<i data-feather="check-circle" class="w-6 h-6 text-green-500 flex-shrink-0"></i>
						<div>
							<h4 class="font-semibold mb-2">Context Awareness</h4>
							<p class="text-gray-600">Understanding context for better command interpretation.</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<i data-feather="check-circle" class="w-6 h-6 text-green-500 flex-shrink-0"></i>
						<div>
							<h4 class="font-semibold mb-2">Custom Commands</h4>
							<p class="text-gray-600">Ability to create and customize voice commands.</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<i data-feather="check-circle" class="w-6 h-6 text-green-500 flex-shrink-0"></i>
						<div>
							<h4 class="font-semibold mb-2">Machine Learning</h4>
							<p class="text-gray-600">Continuous learning and improvement over time.</p>
						</div>
					</div>
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
	name: 'AIVoice',
	components: {
		ProjectHeader,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data() {
		const projectData = projects.find(p => p.title === 'AI Voice Command');
		
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

<style scoped>
/* Add hover effects for feature cards */
.bg-white {
	transition: all 0.3s ease;
}

.bg-white:hover {
	transform: translateY(-5px);
}

/* Smooth icon transitions */
[data-feather] {
	transition: all 0.3s ease;
}

.bg-white:hover [data-feather] {
	transform: scale(1.1);
}
</style>