// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	// Single project with autoplaying video - put your video in public/video.mp4 or use a full URL
	{
		id: 1,
		title: 'My Personal Website',
		category: 'Video',
		img: require('@/assets/images/micky.jpg'),
		link: '/projects/single-project'
	}
];

export default projects;
