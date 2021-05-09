// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const helloGesture = new GestureDescription('hello');

// Thumb 
helloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.25)
helloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
helloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
helloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
helloGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
helloGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
helloGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    helloGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    helloGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}




