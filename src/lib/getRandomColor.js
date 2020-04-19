export default function getRandomColor() {
    const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple' ];

    const random = Math.floor(Math.random() * 7);

    return colors[random];
}