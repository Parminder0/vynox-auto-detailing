"use client";

import React, { useState } from "react";

export default function RescheduleCancel() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#0B1E3F]">
        Reschedule / Cancel Booking
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <p className="text-gray-600 mb-4">
          You can reschedule your booking to another date or cancel it below.
        </p>

        <div className="flex flex-col gap-4">
          {/* Example reschedule calendar mockup */}
          <label className="text-sm font-semibold text-gray-700">
            Choose a new date:
          </label>
          <input
            type="date"
            className="border rounded-lg p-2 w-64"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          {/* Action buttons */}
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-[#FFCC66] text-[#0B1E3F] font-semibold rounded-lg hover:bg-[#ffb933]">
              Reschedule
            </button>
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
