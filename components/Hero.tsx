'use client'

import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Sparkles, X} from 'lucide-react'
import Link from "next/link";

// const navigation: string[] = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Marketplace', href: '#' },
//     { name: 'Company', href: '#' },
// ]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">

                    </div>
                    {/*<div className="hidden lg:flex lg:gap-x-12">*/}
                    {/*    {navigation.map((item) => (*/}
                    {/*        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-coral">*/}
                    {/*            {item.name}*/}
                    {/*        </a>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-200">
                                <span className="sr-only">Close menu</span>
                                <X aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            {/*<div className="-my-6 divide-y divide-white/10">*/}
                            {/*    <div className="space-y-2 py-6">*/}
                            {/*        {navigation.map((item) => (*/}
                            {/*            <a*/}
                            {/*                key={item.name}*/}
                            {/*                href={item.href}*/}
                            {/*                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-coral hover:bg-white/5"*/}
                            {/*            >*/}
                            {/*                {item.name}*/}
                            {/*            </a>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*    <div className="py-6">*/}
                            {/*        <a*/}
                            {/*            href="#"*/}
                            {/*            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-coral hover:bg-white/5"*/}
                            {/*        >*/}
                            {/*            Log in*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                </div>
                <div className=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
                    <img
                        alt=""
                        src={'/logo.png'}
                        className="size-25 object-contain mx-auto animate-fade-in-up mb-5"
                    />
                    <div className="text-center ">
                        <h1 className="animate-fade-in-up [--animation-delay:500ms] text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
                            AduRaket
                        </h1>
                        <p className="animate-fade-in-up [--animation-delay:500ms] mt-8 text-sm font-medium text-pretty text-secondary lg:text-lg">
                            Kelola banyak peserta sesi badminton dengan lebih mudah! <br/>
                            <span className={"font-semibold"}>AduRaket</span> membantu host menyusun matchup yang seimbang, cepat, dan praktis untuk setiap sesi permainan.
                        </p>
                        <div className="animate-fade-in-up [--animation-delay:1000ms] mt-10 flex items-center justify-center gap-x-6">
                            <Link href={`/matchmaking/create`}
                                  className="rounded-md bg-coral px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ">
                                <div className={"inline-flex items-center gap-x-2"}>
                                    <Sparkles/>
                                    <span>Mulai Matchmaking</span>
                                </div>
                            </Link>
                            
                            
                            <Link href={'/about'} className="text-sm/6 font-semibold text-coral">
                                Pelajari <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
