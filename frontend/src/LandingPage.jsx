import DivorceItem from "./components/DivorceItem";

export default function LandingPage() {
  const dummyData = [
    {
      celebrity1: "Kanye West",
      celebrity2: "Kim Kardashian",
      reason: "Personality differences and lifestyle changes",
    },
    {
      celebrity1: "Chris Pratt",
      celebrity2: "Anna Faris",
      reason: "Conflicting career priorities",
    },
    {
      celebrity1: "Ben Affleck",
      celebrity2: "Jennifer Garner",
      reason: "Irreconcilable differences and personal struggles",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold">Celebrity Divorce List</h1>
      <p className="text-lg mt-4 max-w-lg">
        Explore the funniest and most bizarre reasons celebrities have split up!
      </p>

      {/* Rendering dummy divorce cases */}
      <div className="mt-8 w-full max-w-2xl">
        {dummyData.map((divorce, index) => (
          <DivorceItem
            key={index}
            celebrity1={divorce.celebrity1}
            celebrity2={divorce.celebrity2}
            reason={divorce.reason}
          />
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
