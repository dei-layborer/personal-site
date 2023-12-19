window.addEventListener('DOMContentLoaded', bgInit);

function bgInit() {

    const options = {
        background: {
            color: 'transparent',
        },
        particles: {
            number: {
                value: 175,
            },
            size: {
                value: { min: 1.5, max: 4},
            },
        },
        preset: 'snow',
    };

    tsParticles.load('tsparticles', options);


}