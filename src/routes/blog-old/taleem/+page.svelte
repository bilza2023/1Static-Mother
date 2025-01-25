<script>
    import {NavBtn,HdgWithIcon} from '$lib/cmp';
    import {Icons} from '$lib/util';
    import NavBlog from '$lib/appComp/NavBlog.svelte';
    </script>
    
<NavBlog />    
    <div class='bg-gray-800 px-4 py-6 text-white main text-xl'>
    
    <div class='flex justify-center mb-4'>
    <HdgWithIcon>What is taleem.help</HdgWithIcon>
    </div>
    

<p>Taleem.help is an educational platform, offering quality and affordable education to every student in Pakistan.</p>
    
<h2>Empowering Every Student</h2>

<p>At Taleem.help, we're committed to narrowing the educational gap in Pakistan, particularly in Scientific subjects and STEM. Our platform delivers top-quality lectures, presentations, and lessons to empower students with knowledge.</p>

    
        <h2>Why Taleem.help?</h2>
        <ul>
            <li><strong>Non-Video Format:</strong> Overcoming slow internet and high data costs, our content is designed without heavy video elements, ensuring accessibility for all.</li>
            <li><strong>Mobile-First Design:</strong> Recognizing the importance of mobile devices, we provide exam preparation tools that fit in your pocket.</li>
            <li><strong>Flexible Learning:</strong> Study at your own pace, whether tackling one question or completing an entire exercise in an hour.</li>
            <li><strong>Accessible Education:</strong> An ideal option for those lacking access to costly tuition or unable to reach traditional institutes.</li>
        </ul>
    
        <h2>Your Learning Journey Starts Here</h2>
        <p>Begin a personalized learning journey tailored to your needs at Taleem.help. Our platform is optimized for mobile devices, ensuring a seamless educational experience even in challenging conditions.</p>
    
        <p>Join us in revolutionizing education in Pakistan. Taleem.help - Where Learning Knows No Boundaries.</p>
    
    <br>
    <br>
    <br>
    <br>
    </div>
    
    <style>
    div {line-height: 2.1em;}
    h2 {padding-left: 8px; background-color:#181f27; color:yellow}
    li {
        padding-left: 12px;
        text-decoration: dotted;
    }
    
    li::before {
        content: "►";  /* You can replace this with any character or Unicode symbol you like */
        padding-right: 5px;  /* Adjust as needed */
    }
    
    </style>
    