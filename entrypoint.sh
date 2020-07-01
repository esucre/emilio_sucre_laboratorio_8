#!/usr/bin/env bash

CMD=$1
  
case "$CMD" in  

	# "mongo:start" ) 
	
    # exec npm run mongo:start

	# ;;


	"start" ) 
    exec npm start

	;;

	* ) 
	 exec $CMD ${@:2} 
	 ;; 
esac