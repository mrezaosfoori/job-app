import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import citiesList from "../data/cities.json";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}

export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, ...props }, ref) {
    const [locationSerachInput, setLocationSerarchInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);
    const cities = useMemo(() => {
      console.log(locationSerachInput);
      if (!locationSerachInput.trim()) return [];
      const serachWord = locationSerachInput.split(" ");
      return citiesList
        .map((city) => `${city.title}`)
        .filter(
          (city) =>
            city.startsWith(serachWord[0]) &&
            serachWord.every((word) => city.includes(word)),
        )
        .slice(0, 5);
    }, [locationSerachInput]);
    return (
      <div className="relative">
        <Input
          placeholder="نام شهر را جستجو کن"
          type="search"
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          value={locationSerachInput}
          onChange={(e) => setLocationSerarchInput(e.target.value)}
          {...props}
          ref={ref}
        />
        {locationSerachInput.trim() && hasFocus && (
          <div className="absolute z-20 w-full divide-y rounded-b-lg  border-x border-b bg-background shadow-2xl">
            {!cities.length && <p className="p-3">شهری یافت نشد</p>}
            {cities.map((city) => (
              <button
                key={city}
                className="block w-full p-2 text-start"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onLocationSelected(city);
                  setLocationSerarchInput("");
                }}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
