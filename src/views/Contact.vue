<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			videoMuted: true,
			contacts: [
				{
					id: 1,
					name: 'Poblacion Mahayahay, Cordova, Cebu',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'KrysleeMiano@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+63123456789',
					icon: 'phone',
				},
				{
					id: 4,
					name: 'https://www.facebook.com/mickeymiano',
					icon: 'facebook',
				},
				{
					id: 5,
					name: 'https://www.github.com/mickeymiano',
					icon: 'github',
				},
				{
					id: 5,
					name: 'https://www.instagram.com/mickeymiano',
					icon: 'instagram',
				},
				
			],
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
	<div class="container mx-auto py-5 md:py-10 md:mt-10">
		<!-- Page header -->
		<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-7">
			Contact
		</p>

		<!-- My Picture Section - same layout as project page -->
		<div class="flex flex-col items-center mt-10 max-w-6xl mx-auto px-4">
			<h2 class="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
				My Picture..
			</h2>
			<img
				src="@/assets/images/cntactnimicky.jpg"
				alt="My picture"
				class="max-w-xs w-full rounded-lg shadow-lg object-cover"
			/>
			<p class="mt-6 text-center text-ternary-dark dark:text-ternary-light max-w-2xl">
				My favorite place is Busay Gaslamp. I love the beautiful view there, and I often go there to ride my bike. It helps me relieve stress and makes me feel happy and peaceful.
			</p>
			<audio
				controls
				class="mt-8 w-full max-w-lg"
				:src="require('@/assets/images/contactnimicky.mp3')"
			>
				Your browser does not support the audio element.
			</audio>
		</div>

		<!-- Video Section - same style as project page -->
		<div class="mt-24 max-w-6xl mx-auto px-4">
			<div class="relative group">
				<div class="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg bg-black/60 text-white font-semibold">
					My Activity
				</div>
				<video
					:src="require('@/assets/images/contactnimicky.mp4')"
					autoplay
					:muted="videoMuted"
					loop
					playsinline
					class="rounded-2xl shadow-xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
				/>
				<button
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
				<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-2xl">
					<h3 class="text-2xl font-bold text-white mb-2">
						Contact
					</h3>
					<p class="text-gray-200">
						This page also provides my contact information and includes a short video about the life of an IT student. I used HTML to organize the image, audio, video, and links on this page.
					</p>
				</div>
			</div>
		</div>

		<!-- Contact form and details -->
		<div class="flex flex-col-reverse md:flex-row mt-24">
			<ContactForm />
			<ContactDetails :contacts="contacts" />
		</div>
	</div>
</template>

<style scoped>
.group:hover video {
	filter: brightness(1.05);
}
</style>
