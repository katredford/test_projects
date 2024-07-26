const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const particleArray = [];
let x,y;

const handleDrawCircle= (event) => {
    event.preventDefault()
    x = event.pageX;
    y = event.pageY;
    
    const particle = new Particle(x, y);
    particleArray.push(particle);
};


const createParticle = () => {
    const x = Math.random() * canvas.width;
    const y = canvas.height; // Start at the bottom of the canvas
    const particle = new Particle(x, y);
    particleArray.push(particle);
};

const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

//    particleArray.forEach((particle) => {
//     particle?.move();
//     particle?.draw();
//    })

particleArray.forEach((particle, index) => {
    // particle.move();
    particle.draw();

    // Remove particles that are off the top of the canvas
    if (particle.y + particle.radius < 0) {
        particleArray.splice(index, 1);
    }
})

    requestAnimationFrame(animate);
};

class Particle {
    constructor(x=0, y=0){
        this.x =x;
        this.y =y;
        this.radius = Math.random() *50;
        this.dx = Math.random() * 3;
        this.dy = Math.random() *7;
        this.color = "white";
    }
  
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.strokeStyle = this.color;
        context.stroke();

        const gradient = context.createRadialGradient(
            this.x,
            this.y,
            1,
            this.x + 0.5,
            this.y + 0.5,
            this.radius
          );
          
          gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0.3)');
          gradient.addColorStop(0.50, '#e7feff');
          
          context.fillStyle = gradient;

        // context.fillStyle = this.color;
        context.fill();
    }

    move(){
        this.x = this.x + this.dx;
        this.y = this.y - this.dy;
    }
}

// setInterval(createParticle, 500);

animate();

canvas.addEventListener('click', handleDrawCircle);
