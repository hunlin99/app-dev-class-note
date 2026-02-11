import BackBtn from "../../components/back-btn"

const links = [
  { name: "Session Overview", href: "#overview" },
  { name: "SwiftUI Basics", href: "#swiftui-basics" },
  { name: "@State Property Wrapper", href: "#state" },
  { name: "Text & Styling", href: "#text" },
  { name: "TextField & Input", href: "#textfield" },
  { name: "Button & Actions", href: "#button" },
  { name: "Conditional UI", href: "#conditional-ui" },
  { name: "Mini App: Counter", href: "#counter" },
  { name: "Mini App: Mortgage Calculator", href: "#mortgage" },
  { name: "Key Takeaways", href: "#takeaways" },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-100 rounded-lg p-4 my-3 overflow-auto text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

function Tip({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
      <p className="font-semibold">{title}</p>
      <div className="mt-2 text-sm leading-6">{children}</div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-2 py-1 text-xs font-semibold">
      {children}
    </span>
  )
}

export default function IOSSession1() {
  return (
    <main>
      {/* HERO */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://github.com/hunlin99/Ling-portfolio/blob/main/image/background-opasity-4.png?raw=true"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BackBtn />

          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              iOS Development — Session 1
            </h2>

            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              SwiftUI foundations: <b>Views</b>, <b>@State</b>, <b>User Input</b>, and <b>Simple App Logic</b>.
              <br />
              Goal: understand how SwiftUI updates UI automatically based on state.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>SwiftUI</Badge>
              <Badge>@State</Badge>
              <Badge>Text</Badge>
              <Badge>TextField</Badge>
              <Badge>Button</Badge>
              <Badge>Conditional UI</Badge>
            </div>
          </div>

          {/* NAV */}
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex md:flex-wrap lg:gap-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="border-2 border-dashed border-gray-300 rounded-lg px-3 py-2 hover:border-blue-500 transition-colors"
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        {/* OVERVIEW */}
        <div id="overview" className="mt-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Session Overview</h2>

          <p className="mt-3">
            This session introduces how iOS apps are built using <b>SwiftUI</b>.
          </p>

          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>SwiftUI view structure</li>
            <li>Using <code>@State</code> to store UI data</li>
            <li>Handling user input</li>
            <li>Building small interactive apps</li>
          </ol>

          <Tip title="Mental model 🧠">
            SwiftUI = UI is a function of state.<br />
            Change the state → UI updates automatically.
          </Tip>
        </div>

        {/* SWIFTUI BASICS */}
        <div id="swiftui-basics" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">SwiftUI Basics</h2>

          <CodeBlock>{`struct ContentView: View {
    var body: some View {
        Text("Hello Class MASD 4003")
    }
}`}</CodeBlock>

          <Tip title="Key idea">
            Every SwiftUI screen is a <b>View</b>, and every View must return something inside <code>body</code>.
          </Tip>
        </div>

        {/* STATE */}
        <div id="state" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">@State Property Wrapper</h2>

          <CodeBlock>{`@State private var name: String = ""
@State private var count: Int = 1`}</CodeBlock>

          <Tip title="Why @State matters">
            <code>@State</code> tells SwiftUI: “When this value changes, re-render the UI.”
          </Tip>
        </div>

        {/* TEXTFIELD */}
        <div id="textfield" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">TextField & User Input</h2>

          <CodeBlock>{`TextField("Enter your name", text: $name)
    .textFieldStyle(.roundedBorder)`}</CodeBlock>

          <Tip title="$name explained">
            <code>$name</code> creates a two-way binding between the UI and state.
          </Tip>
        </div>

        {/* BUTTON */}
        <div id="button" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Button & Actions</h2>

          <CodeBlock>{`Button("Increase Count") {
    count += 1
}`}</CodeBlock>

          <Tip title="What happens here?">
            Pressing the button updates <code>count</code>, which triggers a UI refresh.
          </Tip>
        </div>

        {/* CONDITIONAL UI */}
        <div id="conditional-ui" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Conditional UI</h2>

          <CodeBlock>{`if showNameError {
    Text("Name must be at least 3 characters.")
}`}</CodeBlock>

          <Tip title="SwiftUI logic">
            UI can be shown or hidden using normal Swift <code>if</code> statements.
          </Tip>
        </div>

        {/* MORTGAGE */}
        <div id="mortgage" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Mini App: Mortgage Calculator
          </h2>

          <p className="mt-3">
            This mini app combines multiple inputs, calculations, and outputs in one screen.
          </p>

          <Tip title="Why this matters">
            This is your first real example of turning user input into calculated results in SwiftUI.
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Key Takeaways
          </h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>SwiftUI builds UI declaratively</li>
            <li><code>@State</code> controls UI updates</li>
            <li>User input flows through bindings</li>
            <li>Small apps are built by combining simple views</li>
          </ul>

        </div>
      </section>
    </main>
  )
}
