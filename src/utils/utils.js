export const getTopFiveData = (feeds) => {
    let newFeeds = [];

    for ( let i = 0; i < 5; i++ ) {
        newFeeds.push(feeds[i]);
    }

    return newFeeds;
};

export const sortFeeds = (data) => {
    return data.sort(function(a, b){
        const timeA = new Date(a.createdAt);
        const timeB = new Date(b.createdAt);
        return timeA.getTime() - timeB.getTime();
    });
}