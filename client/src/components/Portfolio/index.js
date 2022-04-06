import React from "react";

function Portfolio() {
    const projects = [
        {
            title: 'Su Casa',
            liveLink: 'https://mighty-taiga-27684.herokuapp.com/',
            repoLink: 'https://github.com/amirb97/Sucasa-React-SPA-Project',
            image: require('../../assets/sucasa.jpg')
        },
        {
            title: 'Voto',
            liveLink: 'https://dry-shelf-93414.herokuapp.com/',
            repoLink: 'https://github.com/amirb97/desktop-wallpaper-voting-site',
            image: require('../../assets/voto.png')
        },
        {
            title: 'Take A Hike',
            liveLink: 'https://amirb97.github.io/take-a-hike/',
            repoLink: 'https://github.com/amirb97/take-a-hike',
            image: require('../../assets/take-a-hike.png')
        },
        {
            title: 'Tech Blog',
            liveLink: 'https://protected-dawn-79588.herokuapp.com/',
            repoLink: 'https://github.com/amirb97/MVC-Tech-Blog-Challenge',
            image: require('../../assets/tech-blog.png')
        },
        {
            title: 'Weather Dashboard',
            liveLink: 'https://amirb97.github.io/weather-dashboard-challenge/',
            repoLink: 'https://github.com/amirb97/weather-dashboard-challenge',
            image: require('../../assets/weather-dashboard.png')
        },
        {
            title: 'Password Generator',
            liveLink: 'https://amirb97.github.io/password-generator-challenge/',
            repoLink: 'https://github.com/amirb97/password-generator-challenge',
            image: require('../../assets/password-generator.png')
        }
    ]

    return (
        <div className="text-center">
            <h1 className="border-bottom border-dark p-3">Portfolio</h1>
            <p>Just some of the projects I've worked on with links to their respective GitHub repos and live deployements.</p>
            <div className="flex-row justify-content-around">
                {projects.map((project) => (
                    <div key={project.title} className='m-3 p-3 rounded shadow-lg'>
                        <h2>{project.title}</h2>
                        <img
                          src={project.image}
                          alt={project.title}
                          className='img-thumbnail'
                        />
                        <div className="m-3">
                            <a href={project.liveLink} className='text-decoration-none'>Deployed Link</a>
                            <br></br>
                            <a href={project.repoLink} className='text-decoration-none'>GitHub Repo Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
