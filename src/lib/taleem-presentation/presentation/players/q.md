


1 : is it ok to place the initial/init code inside PresentationObj ?
 this code
    assets =  await Taleem.loadAssets();
       await Taleem.loadAppImages(slides);
       inside
       await presentationObj.init();

2: should we seperate import { Howl } from 'howler'; and init sound from presentationObj (it gets sound rather than soundData) correct?

3: any suggestions about PLAY_STATE and state management ? 

first discuess each then code