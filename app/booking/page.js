'use client'; 

import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Car, User, CreditCard, CheckCircle, Clock, Save, Lock, ArrowLeft, Package } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_SERVICES = [
    { 
        id: 1, 
        name: "Exterior Ceramic Coat", 
        price: 350, 
        duration: 240, 
        description: "Premium hydrophobic ceramic coating for unmatched gloss and paint protection. Lasts up to 3 years.", 
        tools: ["Microfiber Applicators", "IR Curing Lamps", "High-Grade Ceramic Solution"], 
        provider: "Ethan Hunt" 
    },
    { 
        id: 2, 
        name: "Full Interior Deep Clean", 
        price: 180, 
        duration: 120, 
        description: "Deep steam cleaning and odor neutralization for carpets, seats, and upholstery.", 
        tools: ["Steam Extractor", "Upholstery Brush Kit", "Ozone Generator"], 
        provider: "Jane Doe" 
    },
    { 
        id: 3, 
        name: "Headlight Restoration", 
        price: 85, 
        duration: 60, 
        description: "Restores clarity to faded or yellowed headlights, improving visibility and aesthetics.", 
        tools: ["Wet Sanding Kit", "Polishing Compound", "UV Protective Sealant"], 
        provider: "Ethan Hunt" 
    }
];

const MOCK_VEHICLE_TYPES = ["Sedan", "Hatchback", "SUV", "Truck", "Minivan", "Luxury Car"];
const MOCK_POPULAR_MODELS = ["Honda Civic", "Tesla Model 3", "Ford F-150", "Toyota Camry"];

const MOCK_TIME_SLOTS = [
    "9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"
];

const initialBookingData = {
    serviceId: null,
    date: null,
    time: null,
    vehicleType: null,
    vehicleModel: null,
    notes: '',
    name: '',
    email: '',
    phone: '',
    paymentMethod: null,
    currency: 'USD',
};

// --- UTILITY COMPONENTS ---

const StepIndicator = ({ step, title, current }) => (
    <div className="flex flex-col items-center space-y-1 p-2 opacity-100">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-colors duration-300 ${
            current ? 'bg-[#FFCC66] text-[#1a1a1a] shadow-lg' : 'bg-gray-700 text-gray-400'
        }`}>
            {step}
        </div>
        <div className={`text-xs font-medium text-center ${current ? 'text-white' : 'text-gray-400'}`}>
            {title}
        </div>
    </div>
);

const Card = ({ children, title, icon: Icon }) => (
    <div className="bg-[#242424] p-6 rounded-xl shadow-2xl border border-[#333] transition-all hover:border-[#FFCC66]/50">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            {Icon && <Icon className="w-5 h-5 mr-2 text-[#FFCC66]" />}
            {title}
        </h2>
        {children}
    </div>
);

const InputField = ({ label, type = 'text', value, onChange, placeholder, icon: Icon, required = false }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
        <div className="relative">
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`w-full bg-[#1A1A1A] text-white border border-[#333] rounded-lg py-2 ${Icon ? 'pl-10' : 'pl-4'} pr-4 focus:border-[#FFCC66] focus:ring-[#FFCC66] focus:ring-1 transition duration-200`}
            />
        </div>
    </div>
);

// --- STEP COMPONENTS (MOVED TO THE TOP TO ENSURE INITIALIZATION BEFORE STEPS ARRAY) ---

// 1. Service Selection & Details
const Step1_ServiceDetails = ({ bookingData, setBookingData, handleNext }) => {
    const selectedService = MOCK_SERVICES.find(s => s.id === bookingData.serviceId);

    return (
        <div className="space-y-6">
            <Card title="Choose Your Service" icon={Car}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {MOCK_SERVICES.map(service => (
                        <div
                            key={service.id}
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                                bookingData.serviceId === service.id
                                    ? 'border-[#FFCC66] bg-[#FFCC66]/20 shadow-md'
                                    : 'border-[#333] hover:border-gray-500'
                            }`}
                            onClick={() => setBookingData({ ...bookingData, serviceId: service.id })}
                        >
                            <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                            <p className="text-sm text-gray-400">Time: {service.duration} mins</p>
                            <p className="text-xl font-bold text-[#FFCC66]">
                                ${service.price}
                            </p>
                        </div>
                    ))}
                </div>
            </Card>

            {selectedService && (
                <Card title={`Details for ${selectedService.name}`} icon={CheckCircle}>
                    <p className="text-gray-300 mb-4">{selectedService.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-medium text-[#FFCC66] mb-1">Assigned Provider</p>
                            <p className="text-white">{selectedService.provider}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[#FFCC66] mb-1">Key Tools Used</p>
                            <ul className="text-white text-sm list-disc pl-5">
                                {selectedService.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                            </ul>
                        </div>
                    </div>
                </Card>
            )}

            <button
                onClick={handleNext}
                disabled={!bookingData.serviceId}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    bookingData.serviceId
                        ? 'bg-[#FFCC66] text-[#1a1a1a] hover:bg-yellow-400'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
                Next: Select Date & Time <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

// 2. Date & Time Selection
const Step2_DateTime = ({ bookingData, setBookingData, handleNext, handleBack }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState({}); 

    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    // Mock Availability Check
    useEffect(() => {
        const mockSlots = {};
        for (let i = 1; i <= daysInMonth(currentMonth); i++) {
            if (Math.random() > 0.3) {
                mockSlots[i] = MOCK_TIME_SLOTS.filter(() => Math.random() > 0.1);
            } else {
                mockSlots[i] = [];
            }
        }
        setAvailableSlots(mockSlots);
    }, [currentMonth]);

    const handleDateSelect = (day) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setBookingData(prev => ({ ...prev, date: date.toISOString().split('T')[0], time: null }));
    };

    const isDateSelected = (day) => {
        const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0];
        return dateStr === bookingData.date;
    };

    const isSlotSelected = (time) => bookingData.time === time;

    const selectedDay = bookingData.date ? new Date(bookingData.date).getDate() : null;
    const slotsForSelectedDay = selectedDay ? availableSlots[selectedDay] || [] : [];

    const isReadyToProceed = bookingData.date && bookingData.time;

    return (
        <div className="space-y-6">
            <Card title="Select Date & Time" icon={Calendar}>
                {/* Timezone Note */}
                <p className="text-xs text-gray-500 mb-4">
                    All times are shown in your local timezone for accurate scheduling.
                </p>
                {/* Calendar */}
                <div className="p-4 bg-[#1A1A1A] rounded-xl border border-[#333]">
                    <div className="flex justify-between items-center text-white mb-4">
                        <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-2 rounded-full hover:bg-gray-700 transition"><ArrowLeft className="w-5 h-5" /></button>
                        <h3 className="font-semibold">{monthName}</h3>
                        <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-2 rounded-full hover:bg-gray-700 transition"><ArrowLeft className="w-5 h-5 transform rotate-180" /></button>
                    </div>
                    
                    <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-400">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <span key={day}>{day}</span>)}
                    </div>

                    <div className="grid grid-cols-7 text-center text-sm">
                        {[...Array(firstDayOfMonth(currentMonth)).keys()].map(i => <div key={`empty-${i}`} className="p-2"></div>)}
                        {[...Array(daysInMonth(currentMonth)).keys()].map(day => {
                            const dayNum = day + 1;
                            const isAvailable = availableSlots[dayNum] && availableSlots[dayNum].length > 0;
                            const isSelected = isDateSelected(dayNum);
                            const today = new Date().toDateString() === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNum).toDateString();
                            
                            return (
                                <button
                                    key={dayNum}
                                    onClick={() => handleDateSelect(dayNum)}
                                    disabled={!isAvailable}
                                    className={`p-2 m-0.5 rounded-full font-medium transition-colors duration-150 relative 
                                        ${isSelected ? 'bg-[#FFCC66] text-[#1a1a1a] shadow-md' : ''}
                                        ${!isSelected && isAvailable ? 'text-white hover:bg-gray-600' : ''}
                                        ${!isAvailable ? 'text-gray-600 cursor-not-allowed line-through' : ''}
                                        ${today && !isSelected ? 'border border-[#FFCC66]/50' : ''}
                                    `}
                                >
                                    {dayNum}
                                    {isAvailable && !isSelected && <span className="absolute bottom-0 right-0 w-1 h-1 bg-green-500 rounded-full"></span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Time Slots */}
                {bookingData.date && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center"><Clock className="w-4 h-4 mr-2 text-[#FFCC66]" /> Available Time Slots</h3>
                        <div className="flex flex-wrap gap-3">
                            {slotsForSelectedDay.length > 0 ? (
                                slotsForSelectedDay.map(time => (
                                    <button
                                        key={time}
                                        onClick={() => setBookingData(prev => ({ ...prev, time }))}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                                            isSlotSelected(time)
                                                ? 'bg-[#FFCC66] text-[#1a1a1a] shadow-md'
                                                : 'bg-gray-700 text-white hover:bg-gray-600'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))
                            ) : (
                                <p className="text-gray-500">No slots available for this date.</p>
                            )}
                        </div>
                    </div>
                )}
            </Card>

            <div className="flex justify-between">
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!isReadyToProceed}
                    className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isReadyToProceed
                            ? 'bg-[#FFCC66] text-[#1a1a1a] hover:bg-yellow-400'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Next: Vehicle Details <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// 3. Vehicle Details
const Step3_VehicleDetails = ({ bookingData, setBookingData, handleNext, handleBack }) => {
    const isReadyToProceed = bookingData.vehicleType && bookingData.vehicleModel;

    const handleModelInput = (e) => {
        setBookingData(prev => ({ ...prev, vehicleModel: e.target.value }));
    };

    return (
        <div className="space-y-6">
            <Card title="Vehicle Information" icon={Car}>
                
                {/* Vehicle Type Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Type <span className="text-red-500">*</span></label>
                    <select
                        value={bookingData.vehicleType || ''}
                        onChange={(e) => setBookingData(prev => ({ ...prev, vehicleType: e.target.value }))}
                        className="w-full bg-[#1A1A1A] text-white border border-[#333] rounded-lg py-2.5 px-4 focus:border-[#FFCC66] focus:ring-[#FFCC66] transition duration-200"
                        required
                    >
                        <option value="" disabled>Select Vehicle Type (Car, Truck, SUV, etc.)</option>
                        {MOCK_VEHICLE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
                
                {/* Vehicle Model Input with Autofill */}
                <InputField
                    label="Specific Vehicle Model"
                    value={bookingData.vehicleModel || ''}
                    onChange={handleModelInput}
                    placeholder="e.g., Tesla Model 3, Ford F-150"
                    icon={Car}
                    required
                />
                
                {/* Autofill Options for popular models */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Popular Models (Autofill)</label>
                    <div className="flex flex-wrap gap-2">
                        {MOCK_POPULAR_MODELS.map(model => (
                            <button
                                key={model}
                                onClick={() => setBookingData(prev => ({ ...prev, vehicleModel: model }))}
                                className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                            >
                                {model}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Additional Notes/Requests */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes / Requests</label>
                    <textarea
                        rows="4"
                        value={bookingData.notes || ''}
                        onChange={(e) => setBookingData(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g., Key drop-off instructions, focus on pet hair removal."
                        className="w-full bg-[#1A1A1A] text-white border border-[#333] rounded-lg py-2 px-4 focus:border-[#FFCC66] focus:ring-[#FFCC66] transition duration-200"
                    ></textarea>
                </div>

            </Card>

            <div className="flex justify-between">
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!isReadyToProceed}
                    className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isReadyToProceed
                            ? 'bg-[#FFCC66] text-[#1a1a1a] hover:bg-yellow-400'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Next: Customer Info <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// 4. Customer Information
const Step4_CustomerInfo = ({ bookingData, setBookingData, handleNext, handleBack }) => {
    const [useAutofill, setUseAutofill] = useState(false);
    const isReadyToProceed = bookingData.name && bookingData.email && bookingData.phone && 
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(bookingData.email) &&
                            /^\+?\d{10,14}$/.test(bookingData.phone);
    
    // Mock Autofill for Returning Customers
    useEffect(() => {
        if (useAutofill) {
            setBookingData(prev => ({ 
                ...prev, 
                name: "Alex Johnson (Returning)", 
                email: "alex.j@example.com", 
                phone: "5551234567" 
            }));
        } else if (bookingData.name === "Alex Johnson (Returning)") {
            setBookingData(prev => ({ ...prev, name: '', email: '', phone: '' }));
        }
    }, [useAutofill]);

    const handleChange = (field, value) => {
        setBookingData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <Card title="Your Contact Information" icon={User}>
                
                {/* Data Security Note */}
                <div className="mb-4 p-3 bg-blue-900/50 text-blue-300 rounded-lg flex items-center">
                    <Lock className="w-4 h-4 mr-2" />
                    <span className="text-sm">We ensure secure data encryption for all customer details.</span>
                </div>

                {/* Autofill Toggle (Mock for returning customer) */}
                <div className="mb-6 flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-white text-sm">Returning Customer Autofill?</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={useAutofill} onChange={() => setUseAutofill(!useAutofill)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFCC66]"></div>
                    </label>
                </div>

                {/* Input Fields */}
                <InputField label="Full Name" value={bookingData.name || ''} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" icon={User} required />
                <InputField label="Email Address (Required Format)" type="email" value={bookingData.email || ''} onChange={(e) => handleChange('email', e.target.value)} placeholder="email@example.com" icon={User} required />
                <InputField label="Phone Number (10+ digits, for SMS)" type="tel" value={bookingData.phone || ''} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+1 555-123-4567" icon={User} required />

                {/* Save Info Option */}
                <div className="mt-4 flex items-center">
                    <input type="checkbox" id="saveInfo" className="w-4 h-4 text-[#FFCC66] bg-gray-800 border-gray-600 rounded focus:ring-[#FFCC66]" />
                    <label htmlFor="saveInfo" className="ml-2 text-sm font-medium text-gray-400 flex items-center">
                        <Save className="w-4 h-4 mr-1" /> Save my information for future bookings.
                    </label>
                </div>
            </Card>

            <div className="flex justify-between">
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!isReadyToProceed}
                    className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isReadyToProceed
                            ? 'bg-[#FFCC66] text-[#1a1a1a] hover:bg-yellow-400'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Next: Payment <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// 5. Payment Selection
const Step5_Payment = ({ bookingData, setBookingData, handleNext, handleBack }) => {
    const isReadyToProceed = bookingData.paymentMethod;

    const paymentMethods = [
        { id: 'card', name: 'Credit/Debit Card (Online Gateway)', discount: '5% off' },
        { id: 'upi', name: 'UPI / Bank Transfer', discount: '2% off' },
        { id: 'cash', name: 'Cash on Arrival', discount: 'None' },
        { id: 'paypal', name: 'PayPal / Digital Wallet', discount: 'None' },
    ];

    const totalServiceCost = MOCK_SERVICES.find(s => s.id === bookingData.serviceId)?.price || 0;
    const finalCost = totalServiceCost - (bookingData.paymentMethod === 'card' ? totalServiceCost * 0.05 : bookingData.paymentMethod === 'upi' ? totalServiceCost * 0.02 : 0);

    const handleChange = (field, value) => {
        setBookingData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <Card title="Select Payment Method" icon={CreditCard}>
                <div className="space-y-4">
                    {paymentMethods.map(method => (
                        <div
                            key={method.id}
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 flex justify-between items-center ${
                                bookingData.paymentMethod === method.id
                                    ? 'border-[#FFCC66] bg-[#FFCC66]/20 shadow-md'
                                    : 'border-[#333] hover:border-gray-500'
                            }`}
                            onClick={() => handleChange('paymentMethod', method.id)}
                        >
                            <div>
                                <h3 className="text-white font-medium">{method.name}</h3>
                                <p className="text-xs text-gray-400">Secure Payment Gateway ensures data protection.</p>
                            </div>
                            <span className={`text-sm font-semibold ${method.discount === 'None' ? 'text-gray-400' : 'text-green-400'}`}>
                                {method.discount}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Total Summary</h3>
                    <div className="flex justify-between text-gray-300">
                        <span>Service Cost:</span>
                        <span>${totalServiceCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                        <span>Discount ({bookingData.paymentMethod} only):</span>
                        <span>-${(totalServiceCost - finalCost).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-[#FFCC66] mt-2">
                        <span>FINAL COST:</span>
                        <span>${finalCost.toFixed(2)}</span>
                    </div>
                </div>

                {/* Additional Payment Options */}
                <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                        <input type="checkbox" id="recurring" className="w-4 h-4 text-[#FFCC66] bg-gray-800 border-gray-600 rounded focus:ring-[#FFCC66]" />
                        <label htmlFor="recurring" className="ml-2 text-sm font-medium text-gray-400">
                            Enable recurring payment for subscription services.
                        </label>
                    </div>
                    <div className="flex items-center">
                        <select
                            value={bookingData.currency || 'USD'}
                            onChange={(e) => handleChange('currency', e.target.value)}
                            className="w-24 bg-[#1A1A1A] text-white border border-[#333] rounded-lg py-1 px-2 text-sm focus:border-[#FFCC66]"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="INR">INR</option>
                        </select>
                        <span className="ml-2 text-sm text-gray-400">Accept multiple currencies.</span>
                    </div>
                    <p className="text-xs text-red-400 pt-2">Note: A seamless refund process (3-5 business days) is guaranteed for all payments.</p>
                </div>
            </Card>

            <div className="flex justify-between">
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!isReadyToProceed}
                    className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isReadyToProceed
                            ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/50'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Confirm & Pay Now <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};


// 6. Confirmation
const Step6_Confirmation = ({ bookingData, handleStartOver, onClose }) => {
    const service = MOCK_SERVICES.find(s => s.id === bookingData.serviceId);

    return (
        <div className="space-y-6 text-center">
            <div className="p-8 bg-green-900/50 rounded-xl border border-green-600/50 shadow-2xl">
                <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-lg text-green-300">Thank you, {bookingData.name}!</p>
            </div>

            <Card title="Appointment Details" icon={Calendar}>
                <div className="text-left space-y-3 text-gray-300">
                    <p><strong>Service:</strong> <span className="text-white">{service.name}</span></p>
                    <p><strong>Date & Time:</strong> <span className="text-white font-semibold">{bookingData.date} at {bookingData.time}</span></p>
                    <p><strong>Provider:</strong> <span className="text-white">{service.provider}</span></p>
                    <p><strong>Vehicle:</strong> <span className="text-white">{bookingData.vehicleType} - {bookingData.vehicleModel}</span></p>
                    <p><strong>Total Paid:</strong> <span className="text-[#FFCC66] font-bold">~${MOCK_SERVICES.find(s => s.id === bookingData.serviceId)?.price.toFixed(2)}</span> ({bookingData.paymentMethod})</p>
                </div>
            </Card>

            <Card title="What Happens Next?" icon={User}>
                <p className="text-gray-300 text-left">
                    We have sent an automated confirmation email to <strong>{bookingData.email}</strong> with all the booking details.
                    It includes a direct link to easily reschedule or cancel your appointment.
                </p>
                <div className="mt-4 flex items-center">
                    <input type="checkbox" id="sms" defaultChecked className="w-4 h-4 text-[#FFCC66] bg-gray-800 border-gray-600 rounded focus:ring-[#FFCC66]" />
                    <label htmlFor="sms" className="ml-2 text-sm font-medium text-gray-400">
                        SMS reminders will be sent to <strong>{bookingData.phone}</strong> 24 hours prior.
                    </label>
                </div>
            </Card>

            <button
                onClick={onClose} // Go back to the mock service page
                className="flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-700 text-white hover:bg-gray-600 w-full"
            >
                Return to Service Page
            </button>
        </div>
    );
};


// --- STEPS ARRAY (Now defined AFTER all components) ---

const STEPS = [
    { title: "Service & Details", icon: Car, Component: Step1_ServiceDetails },
    { title: "Date & Time", icon: Calendar, Component: Step2_DateTime },
    { title: "Vehicle Info", icon: Car, Component: Step3_VehicleDetails },
    { title: "Customer Info", icon: User, Component: Step4_CustomerInfo },
    { title: "Payment", icon: CreditCard, Component: Step5_Payment },
    { title: "Confirmation", icon: CheckCircle, Component: Step6_Confirmation },
];

// --- MULTI-STEP BOOKING FLOW COMPONENT (Internal) ---

const BookingFlow = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [bookingData, setBookingData] = useState(initialBookingData);

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 0));
    
    // Function used internally to pass down to steps
    const handleStartOver = () => {
        setCurrentStep(0);
        setBookingData(initialBookingData);
    };

    const CurrentStepComponent = STEPS[currentStep].Component;

    return (
        <div className="w-full max-w-4xl min-h-screen sm:min-h-0 bg-[#1A1A1A] p-4 sm:p-8 font-sans">
            {currentStep < STEPS.length - 1 && (
                <button
                    onClick={onClose}
                    className="flex items-center space-x-1 mb-6 text-gray-400 hover:text-white transition duration-200 text-sm font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Exit Booking & Back to Services</span>
                </button>
            )}

            <h1 className="text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
                <span className="text-[#FFCC66]">Vynox</span> Service Booking
            </h1>
            
            {/* Progress Bar and Step Indicators */}
            <div className="mb-10 p-4 bg-[#242424] rounded-xl shadow-inner shadow-black/20">
                <div className="flex justify-between relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 z-0">
                        <div 
                            className="h-full bg-[#FFCC66] transition-all duration-500 ease-in-out rounded-full"
                            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                        ></div>
                    </div>

                    {STEPS.map((step, index) => (
                        <div key={step.title} className="z-10 cursor-pointer" onClick={() => setCurrentStep(index)}>
                            <StepIndicator step={index + 1} title={step.title} current={index === currentStep} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Step Content */}
            <div className="bg-[#1C1C1C] p-4 sm:p-8 rounded-2xl shadow-xl border border-[#333]">
                <CurrentStepComponent
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleStartOver={handleStartOver} 
                    onClose={onClose} // Pass onClose to confirmation step
                />
            </div>
        </div>
    );
};


// --- MOCK SERVICE PAGE COMPONENT (The new default view) ---

const ServicePageMock = ({ onBookNow }) => (
    <div className="min-h-screen bg-[#1A1A1A] p-4 sm:p-8 font-sans flex flex-col items-center justify-start pt-20 text-white">
        <div className="w-full max-w-2xl bg-[#242424] p-10 rounded-2xl shadow-2xl border border-[#333] text-center">
            <Package className="w-12 h-12 mx-auto text-[#FFCC66] mb-4"/>
            <h1 className="text-4xl font-extrabold text-white mb-4">Our Premium Detailing Services</h1>
            <p className="text-gray-400 mb-8 text-lg">
                Select your package below. Our calendar shows real-time provider and tool availability.
            </p>
            
            <div className="space-y-4 mb-8 text-left">
                {MOCK_SERVICES.map(service => (
                    <div key={service.id} className="p-4 bg-[#1A1A1A] rounded-lg border border-[#333] flex justify-between items-center transition-shadow hover:shadow-lg hover:shadow-gray-900">
                        <div>
                            <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                            <p className="text-sm text-gray-400">{service.description.split('.')[0]}.</p>
                        </div>
                        <span className="text-2xl font-bold text-[#FFCC66]">${service.price}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={onBookNow}
                className="w-full sm:w-2/3 py-4 rounded-lg font-bold text-lg bg-[#FFCC66] text-[#1a1a1a] hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-[#FFCC66]/30 flex items-center justify-center space-x-2 mx-auto"
            >
                <Calendar className="w-6 h-6" />
                <span>Book Service Now</span>
            </button>
        </div>
    </div>
);


// --- MAIN APP COMPONENT (Toggles the views) ---

const App = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    // Conditional rendering to switch between the mock service page and the booking flow
    if (isBookingOpen) {
        return (
            <div className="flex justify-center items-start min-h-screen bg-[#1A1A1A]">
                <BookingFlow onClose={() => setIsBookingOpen(false)} />
            </div>
        );
    }

    return <ServicePageMock onBookNow={() => setIsBookingOpen(true)} />;
};

export default App;
