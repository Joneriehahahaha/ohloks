<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in projectInfo.companyInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<div v-if="projectInfo.objectivesHeading" class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-4">
					{{ projectInfo.objectivesHeading }}
				</p>
				<!-- Education format -->
				<template v-if="projectInfo.objectivesDetails && projectInfo.objectivesDetails[0]?.school">
					<div v-for="(education, index) in projectInfo.objectivesDetails" 
						:key="index" 
						class="font-general-regular text-primary-dark dark:text-ternary-light">
						<p class="mb-2">
							<span class="font-semibold">{{ education.school }}</span> • {{ education.year }}
						</p>
					</div>
				</template>
				<!-- Objectives format -->
				<template v-else>
					<div v-for="objective in projectInfo.objectivesDetails" 
						:key="objective.id" 
						class="mb-4">
						<p class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2">
							{{ objective.details }}
						</p>
						<p class="font-general-regular text-primary-dark dark:text-ternary-light whitespace-pre-line pl-4">
							{{ objective.description }}
						</p>
					</div>
				</template>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.technologies[0].title }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0 pl-16">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 pl-8">
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<div v-for="projectDetail in projectInfo.projectDetails" :key="projectDetail.id" class="pl-8">
				<div v-if="projectDetail.type === 'experience'" class="mb-8">
					<h3 class="text-2xl font-bold mb-6">Experience</h3>
					<div v-for="(exp, index) in projectDetail.experiences" :key="index" class="mb-6">
						<p class="text-lg font-medium mb-1">{{ exp.role }}</p>
						<p class="text-gray-600 dark:text-gray-400 pl-4">{{ exp.year }}</p>
					</div>
				</div>
				<p v-else class="font-general-regular mb-8 text-lg text-ternary-dark dark:text-ternary-light pl-4">
					{{ projectDetail.details }}
				</p>
			</div>
		</div>
	</div>
</template>
