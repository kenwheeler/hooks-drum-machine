import Tone from 'tone';
import { unstable_createResource } from 'react-cache';

export const bufferResource = unstable_createResource(
  url =>
    new Promise(resolve => {
      const buffer = new Tone.Player(url, () => {
        resolve(buffer);
      }).toMaster();
    })
);
