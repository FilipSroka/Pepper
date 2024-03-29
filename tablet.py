#! /usr/bin/env python
# -*- encoding: UTF-8 -*-

"""Example: Use showWebview Method"""

import qi
import argparse
import sys
import time


def main(session):
    """
    This example uses the showWebview method.
    To Test ALTabletService, you need to run the script ON the robot.
    """
    # Get the service ALTabletService.

    try:
        tabletService = session.service("ALTabletService")

        # Ensure that the tablet wifi is enable
        tabletService.enableWifi()

        # Display a web page on the tablet
        tabletService.showWebview("https://filipsroka.github.io/Pepper/")

        time.sleep(10)



        # Hide the web view
        tabletService.hideWebview()
    except Exception:
        print ("Error")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--ip", type=str, default="10.34.59.28",
                        help="Robot IP address. On robot or Local Naoqi: use '10.34.59.28'.")
    parser.add_argument("--port", type=int, default=9559,
                        help="Naoqi port number")

    args = parser.parse_args()
    session = qi.Session()
    try:
        session.connect("tcp://" + args.ip + ":" + str(args.port))
    except RuntimeError:
        print ("Can't connect to Naoqi at ip \"" + args.ip + "\" on port " + str(args.port) +".\n"
               "Please check your script arguments. Run with -h option for help.")
        sys.exit(1)
    main(session)