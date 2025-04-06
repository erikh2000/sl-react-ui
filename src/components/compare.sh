#!/bin/bash
# A script for checking the differences between two component folders. Good for seeing when changes in 
# one project might be need to be copied to sl-react-ui.

verbose=0

# Check for -v flag at beginning or end.
if [[ "$1" == "-v" ]]; then
  verbose=1
  shift
elif [[ "$3" == "-v" ]]; then
  verbose=1
fi

compareComponentFolder="${1%/}"  # Remove trailing slash if present
componentName="$2"

if [[ -z "$componentName" || -z "$compareComponentFolder" ]]; then
  echo "Usage: $0 [-v] <compareComponentFolder> <componentName>"
  exit 1
fi

dir1="./$componentName"
dir2="$compareComponentFolder/$componentName"

if [[ $verbose -eq 1 ]]; then
  diff -r --exclude='.*' "$dir1" "$dir2"
else
  diff -qr --exclude='.*' "$dir1" "$dir2"
fi