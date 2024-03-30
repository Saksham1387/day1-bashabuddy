"use client";
import React, { useState, useEffect } from "react";
import DoctorDetails from "./DoctorDetails";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
const NearbyDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const radius = 10000; // 10km
          const overpassQuery = `[out:json];node[amenity=doctors](around:${radius},${latitude},${longitude});out tags;`;
          const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
            overpassQuery
          )}`;

          try {
            const response = await fetch(overpassUrl);
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            console.log(data.elements);

            setDoctors(data.elements);
          } catch (error) {
            console.error("Error:", error);
            setError("Failed to load doctors.");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setError("Error obtaining location.");
          setLoading(false);
        }
      );
    };

    fetchDoctors();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Number of items you want to show per "page" in the carousel

  // Calculate the total number of pages
  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  // Handler for the left navigation button
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Handler for the right navigation button
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : totalPages - 1
    );
  };

  // Calculate the subset of doctors to display based on the current index
  const displayedDoctors = doctors.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 my-5 text-center">
        Doctors Near You
      </h1>
      <div className="relative m-20">
        <Button
          variant="secondary"
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 text-lg transform -translate-y-1/2 ml-[1px] "
        >
          {"<"}
        </Button>
        <div className="carousel-container my-1 mx-[20px] p-5">
          <div className="grid grid-cols-2 items-center gap-x-2 py-5">
            {loading ? (
              <div
                role="status"
                className="flex flex-col items-center justify-center space-y-2"
              >
                <Image
                  className="ms-60"
                  src="/laoding-animation.gif"
                  height={100}
                  width={100}
                  alt="Loading animation"
                />
                <p className="text-sm text-gray-700 dark:text-gray-400 ms-60">
                  Loading...
                </p>
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : (
              displayedDoctors.map((doctor, index) => (
                <DoctorDetails key={index} doctor={doctor} />
              ))
            )}
          </div>
        </div>
        {/* <ArrowRight  onClick={handleNextClick} className=" absolute right-0 text-lg top-1/2 transform -translate-y-1/2 mr-[0.5px] hover:bg-indigo-400/90 border-indigo-500 border-b-4 active:border-b-0 rounded-lg p-5"/> */}
       
        <Button
          variant="secondary"
          onClick={handleNextClick}
          className="absolute right-0 text-lg top-1/2 transform -translate-y-1/2 mr-[0.5px] "
        >
          {">"}
        </Button>
       
      </div>
    </div>
  );
};

export default NearbyDoctors;
