import axios from 'axios';

const KEY = 'AIzaSyCBicWXlz7Um7uXWfREbHCQfRT-3ZSwtZg';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
    }
});

