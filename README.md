# Autoplay Ableton
This node script opens an Ableton project file, gives Ableton time to start up, and then sends a MIDI note to trigger scene playback in Ableton.  

## Environment variables
The values required for this script to execute correctly are loaded from a `.env` file.  
Please copy `.env.example` to `.env` and set your own values.

The values specified in the `.env` file are:
- REMOVE_RECOVERY_FILES: flag to remove recovery files for Ableton (see below)
- ABLETON_RECOVERY_FILES: the path to Ableton's recovery files (see below)
- ABLETON_PROJECT_FILE: the file path to the Ableton project file to open
- MIDI_NOTE: the MIDI note to send out in order to trigger Ableton to start playing the scene
- MIDI_CHANNEL: the MIDI channel to send out with the note
- ABLETON_PLAY_DELAY: the delay, in seconds, after which the MIDI note is sent. This should be enough for Ableton to start up in.

## Recovery file removal
If you want to circumvent Ableton's recovery dialog, which tends to appear after a scheduled reboot, you can set the `REMOVE_RECOVERY_FILES` option in the `.env` file to `true`. Then specify the location of the recovery files in the `ABLETON_RECOVERY_FILES` option and the script will attempt removal of the indicated file or directory before launching Ableton.  

## Run on startup
A `autoplay-ableton.bat` file is included to run the node script on startup in Windows.  
To execute this script on startup, create a task in Windows Task Scheduler.  
For your use case, change the location to which the script navigates to match where this repository lives.

