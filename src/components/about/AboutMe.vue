<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hello, I\'m Kryslee Miano and I\'m a First Year college student pursuing a Bachelor of Science in Information Technology',
				},
				{
					id: 2,
					bio:
						'One of my hobbies is cycling. I enjoy riding my bike because it helps me stay active and healthy. It also makes me feel relaxed and happy.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<!-- Page header -->
		<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-7">
			About Me
		</p>

		<!-- My Picture Section - same layout as project page -->
		<div class="flex flex-col items-center mt-16 max-w-6xl mx-auto px-4">
			<h2 class="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
				My Picture
			</h2>
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl">
				<img
					src="@/assets/images/hbbsnimicky.jpg"
					alt="My picture"
					class="max-w-xs w-full rounded-lg shadow-lg object-cover"
				/>
				<img
					src="@/assets/images/hbbsnimicky1.jpg"
					alt="My picture"
					class="max-w-xs w-full rounded-lg shadow-lg object-cover"
				/>
			</div>
			<p class="mt-6 text-center text-ternary-dark dark:text-ternary-light max-w-2xl">
				One of my hobbies is cycling. I enjoy riding my bike because it helps me stay active and healthy. It also makes me feel relaxed and happy.
			</p>
			<audio
				controls
				class="mt-8 w-full max-w-lg"
				:src="require('@/assets/images/aboutnimicky.mp3')"
			>
				Your browser does not support the audio element.
			</audio>
		</div>

		<!-- Additional bio details -->
		<div class="mt-24 max-w-2xl mx-auto px-4 text-center">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
