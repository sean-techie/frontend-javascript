// Define MajorCredits with a brand for nominal typing
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// Define MinorCredits with a brand for nominal typing
interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// Sum two MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Sum two MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage
const math: MajorCredits = { credits: 4, brand: "MajorCredits" };
const physics: MajorCredits = { credits: 3, brand: "MajorCr
