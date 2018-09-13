#!/bin/sh
LogPath="./../Files/ChangeLog.txt"

if [ $1="check" ]
then {
    if [ -f $2 ] then {
        echo "File exists"
    }
    else {
        echo "File doesn't exist"
    }
    fi
    echo "$LogPath $2"
    echo "test2"
}
elif [ $1="check2" ]
    then {
        echo "troll"
    }
    fi
}
else {
    echo "Wrong arguments"
}
fi

sleep 5
