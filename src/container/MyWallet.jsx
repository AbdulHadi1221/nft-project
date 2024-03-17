import {
    Footer,
    Header,
    SummaryStep,
    ConfirmStep,
    PriceSummary,
    CompleteStep,
    ProductSummary,
  } from "./MyComponent";
export const MyWallet =()=>{
return(
    <div>

    <Header />
    <div className="flex flex-col items-center justify-center bg-zinc-900 min-h-screen">
    <main className="mt-20 max-w-full w-[737px] max-md:mt-10 flex flex-col items-center">
      <div className="flex gap-5 items-center text-xl text-gray-500 whitespace-nowrap max-md:mt-10 mb-16">
        <SummaryStep active /> <ConfirmStep /> <CompleteStep />
      </div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <ProductSummary /> <PriceSummary />
      </div>
    </main>
    <Footer />
  </div>
    </div>
)
}