import CheckinHeader from "./_components/CheckinHeader";
import BookingForm from "./_components/BookingForm";

export default function CheckinPage() {
    return (
        <div className="min-h-screen bg-white">
            <CheckinHeader />
            <div className="px-4 py-8">
                <BookingForm />
            </div>
        </div>
    );
}