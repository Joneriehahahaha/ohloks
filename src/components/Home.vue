<template>
    <div class="container mx-auto px-4">
        <!-- Hero section -->
        <div class="flex flex-col items-center justify-center min-h-screen">
            <div class="profile-image-container mb-8">
                <img 
                    :src="profileImage"
                    alt="Profile"
                    class="rounded-full w-64 h-64 object-cover profile-image"
                />
            </div>
            
            <h1 class="font-general-semibold text-5xl text-primary-dark dark:text-primary-light uppercase">
                HI, KRYSLEE MIANO
            </h1>
            <p class="font-general-medium mt-4 text-lg text-gray-500 dark:text-gray-400">
                A First Year College Student
            </p>
            
            <!-- Modified Hire Me Button with click handler -->
            <button 
                @click="navigateToPortfolio"
                class="font-general-medium mt-8 mb-8 sm:mb-0 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white duration-300"
            >
                Hire Me
            </button>
        </div>
    </div>
</template>

<script>
import profileImage from '../assets/images/profile.jpg' // Make sure this path is correct

export default {
    name: 'Home',
    data() {
        return {
            profileImage
        }
    },
    methods: {
        navigateToPortfolio() {
            // Navigate to the portfolio page
            this.$router.push('/doubleproject')
                .catch(err => {
                    if (err.name !== 'NavigationDuplicated') {
                        throw err;
                    }
                });
        }
    }
}
</script>

<style scoped>
.profile-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    width: 256px;
    height: 256px;
    cursor: pointer;
    border: 4px solid transparent;
    transition: all 0.3s ease-in-out;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

/* Combined hover effects */
.profile-image-container:hover {
    border-color: #6366f1;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
}

.profile-image-container:hover .profile-image {
    transform: scale(1.1) rotate(3deg);
}
</style> 