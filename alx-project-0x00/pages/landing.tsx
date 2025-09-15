import Button from "@/components/Button";
import Card from "@/components/Card";

const landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="grid grid-cols-4 gap-4">
        {/* Small Buttons */}
        <Button title="Small - sm" size="small" shape="rounded-sm" styles="" />
        <Button title="Small - md" size="small" shape="rounded-md" styles="" />
        <Button title="Small - md" size="small" shape="rounded-lg" styles="" />
        <Button
          title="Small - full"
          size="small"
          shape="rounded-full"
          styles=""
        />

        {/* Medium Buttons */}
        <Button
          title="Medium - sm"
          size="medium"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Medium - md"
          size="medium"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Medium - md"
          size="medium"
          shape="rounded-lg"
          styles=""
        />
        <Button
          title="Medium - full"
          size="medium"
          shape="rounded-full"
          styles=""
        />

        {/* Large Buttons */}
        <Button title="Large - sm" size="large" shape="rounded-sm" styles="" />
        <Button title="Large - md" size="large" shape="rounded-md" styles="" />
        <Button title="Large - md" size="large" shape="rounded-lg" styles="" />
        <Button
          title="Large - full"
          size="large"
          shape="rounded-full"
          styles=""
        />
      </div>
    </div>
  );
};

export default landing;
