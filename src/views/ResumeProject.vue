<template>
	<div class="container mx-auto mt-10 sm:mt-20 px-4">
		<div class="max-w-5xl mx-auto">
			<!-- Header -->
			<h1 class="text-4xl font-bold text-left text-[#0F172A] mb-6">MY PORTFOLIO</h1>
			
			<!-- Date and Role -->
			<div class="flex items-center gap-4 mb-8 text-gray-600">
				<div class="flex items-center">
					<i data-feather="clock" class="w-4 h-4 mr-2"></i>
					December 2024
				</div>
				<div class="flex items-center">
					<i data-feather="tag" class="w-4 h-4 mr-2"></i>
					UI Designer / Full Stack Developer
				</div>
			</div>

			<!-- Main Content with Adjusted Layout -->
			<div class="flex flex-col md:flex-row gap-20">
				<!-- Left Side - Image with adjusted positioning -->
				<div class="md:w-1/3 md:ml-12">
					<div class="bg-white rounded-lg p-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
						<img 
							:src="projectData.img"
							alt="Profile"
							class="w-full aspect-square object-cover rounded-lg"
						/>
					</div>
				</div>

				<!-- Right Side - Name centered vertically and horizontally -->
				<div class="md:w-2/3 md:-ml-8 flex items-center justify-center">
					<h2 class="text-4xl font-bold text-[#0F172A]">JONERIE TABOTABO JR A.</h2>
				</div>
			</div>

			<!-- Two Column Content -->
			<div class="grid md:grid-cols-2 gap-12 mt-12">
				<!-- Left Column -->
				<div>
					<section class="mb-10">
						<h3 class="text-xl font-bold text-[#0F172A] mb-4">Contact</h3>
						<div class="space-y-2 text-gray-700">
							<p>Phone: <a href="tel:+63 9662540485" class="text-blue-600">+63 9662540485</a></p>
							<p>Mail: <a href="mailto:jonerietabotabo@gmail.com" class="text-blue-600">jonerietabotabo@gmail.com</a></p>
							<p>Location: Day-as, Cordova, Cebu</p>
							<p>Birthday: April 12, 2002</p>
							<p>Place of Birth: Carajay, Lapu-Lapu City, Cebu</p>
						</div>
					</section>

					<section>
						<h3 class="text-xl font-bold text-[#0F172A] mb-4">Education</h3>
						<div class="space-y-4">
							<div>
								<p class="font-semibold">Bachelor of Science and Information Technology (BSIT) •</p>
								<p class="text-gray-600">2021-2025</p>
							</div>
							<div>
								<p class="font-semibold">Senior High Diploma, Cordova National High School •</p>
								<p class="text-gray-600">2016-2020</p>
							</div>
							<div>
								<p class="font-semibold">High School Diploma, Cordova National High School •</p>
								<p class="text-gray-600">2012-2016</p>
							</div>
						</div>
					</section>
				</div>

				<!-- Right Column -->
				<div>
					<section class="mb-10">
						<h3 class="text-xl font-bold text-[#0F172A] mb-4">About Me</h3>
						<p class="text-gray-700">
							BSIT student with a motivated attitude and a variety of powerful skills. Adept in various social media platform and technology programs. Committed to contributing my expertise in a dynamic office or media production
						</p>
					</section>

					<section>
						<h3 class="text-xl font-bold text-[#0F172A] mb-4">Experience</h3>
						<div class="space-y-4">
							<div>
								<p class="font-semibold">Concentrix - Technical Support representative</p>
								<p class="text-gray-600">2023-2024</p>
							</div>
							<div>
								<p class="font-semibold">McDonald's - Service crew</p>
								<p class="text-gray-600">2019-2020</p>
							</div>
							<div>
								<p class="font-semibold">Service Crew Lantaw Restaurant</p>
								<p class="text-gray-600">2016-2017</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';
import projects from '../data/projects';

export default {
	name: 'ResumeProject',
	data() {
		const projectData = projects.find(p => p.title === 'My Resume');
		return {
			projectData
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
/* Smooth transitions */
a {
    transition: all 0.2s ease-in-out;
}

a:hover {
    text-decoration: underline;
}

.text-blue-600 {
    color: rgb(37, 99, 235);
}

/* Image container styling */
img {
    transition: transform 0.3s ease;
}

.bg-white {
    background-color: white;
}
</style> 