import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Box, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <a href="/" className="text-white font-semibold text-xl">Blink</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white">Login</Button>
            <Button>Start Deploying</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-16 bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4F46E5,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#6366F1,_transparent_50%)]" />
        </div>
        
        <div className="relative max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Deploy your dreams to the edge
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ship your applications faster with zero configuration. Built for developers, trusted by enterprises.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              Start Deploying <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From single static pages to complex applications, we've got you covered with powerful features and zero configuration.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-black/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Preview your deployments
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every push creates a new deployment with its own unique URL. Preview changes before they go live.
            </p>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/50 p-2 ring-1 ring-white/10 backdrop-blur-xl">
              <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
              <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
              <div className="p-4">
                <div className="font-mono text-sm text-gray-300">
                  <p>$ blink deploy</p>
                  <p className="text-emerald-400">✓ Deployed to production</p>
                  <p className="text-sky-400">Preview: https://your-app.blink.new</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Blink. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    name: 'Global Edge Network',
    description: 'Deploy your applications to a global network of edge servers for blazing fast performance.',
    icon: Globe,
  },
  {
    name: 'Instant Deployments',
    description: 'Push to deploy with zero configuration. Every commit creates a new deployment.',
    icon: Zap,
  },
  {
    name: 'Preview Deployments',
    description: 'Preview changes in a production environment before merging to main.',
    icon: Box,
  },
]