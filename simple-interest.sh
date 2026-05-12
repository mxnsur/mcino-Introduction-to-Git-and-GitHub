#!/bin/bash

# Simple Interest Calculator

echo "Enter the principal:"
read p

echo "Enter rate of interest per year:"
read r

echo "Enter time period in years:"
read t

s=$((p*r*t/100))

echo "The simple interest is: $s"
