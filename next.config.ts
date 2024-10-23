import MillionLint from "@million/lint";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["localhost"],
	},
};

export default MillionLint.next({
	enabled: true,
	rsc: true,
})(nextConfig);
