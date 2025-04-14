"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import reviews from "@/data/reviews.json";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Reviews
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See what our customers are saying about us
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.reviews.map((review) => (
            <article
              key={review.id}
              className="flex max-w-xl flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={review.date} className="text-gray-500">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-50 overflow-hidden flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">
                    {review.name.substring(0, 2)}
                  </span>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {review.name}
                  </p>
                </div>
              </div>
              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {review.comment}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Review Form */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-2xl font-display font-bold tracking-tight text-gray-900">
            Leave a Review
          </h3>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-2.5 flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        formData.rating >= rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0 cursor-pointer"
                      )}
                      aria-hidden="true"
                      onClick={() => setFormData({ ...formData, rating })}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Comment
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="comment"
                    id="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
