
export async function gettimeline() {

    let timeline = [];

    const res = await fetch('http://localhost:3000/api/timeline', { method: 'GET' });
    const result = await res.json();
    if (result.success) {
        timeline.push(result.data)
        // timeline.forEach(function (item) {
        //     console.log(item);
        // });
    } else {
        console.error(result.error);
    }
    // await wait(2000);
    return timeline;
}

export async function wait(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}