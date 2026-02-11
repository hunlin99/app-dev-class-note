import BackBtn from "../../components/back-btn"

const links = [
  { name: "Session Overview", href: "#overview" },
  { name: "SwiftUI Form & Section", href: "#form" },
  { name: "@State & @Observable", href: "#state-observable" },
  { name: "TextField & Validation", href: "#textfield-validation" },
  { name: "DatePicker & Age Logic", href: "#datepicker" },
  { name: "Toggle & Stepper", href: "#toggle-stepper" },
  { name: "Picker Styles", href: "#picker" },
  { name: "Conditional UI", href: "#conditional-ui" },
  { name: "Mini App: Insurance Form", href: "#insurance-app" },
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

export default function IOSSession2() {
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
              iOS Development — Session 2
            </h2>

            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              Building real forms with <b>SwiftUI UI Controls</b>, <b>validation</b>, and
              <b> observable data models</b>.
              <br />
              Goal: create dynamic, rule-driven user interfaces.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>Form</Badge>
              <Badge>Section</Badge>
              <Badge>@State</Badge>
              <Badge>@Observable</Badge>
              <Badge>Picker</Badge>
              <Badge>Toggle</Badge>
              <Badge>Validation</Badge>
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
            This session focuses on building <b>structured forms</b> in SwiftUI and
            managing user input with validation and business rules.
          </p>

          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>SwiftUI <code>Form</code> and <code>Section</code></li>
            <li>Observable data models</li>
            <li>Pickers, toggles, steppers</li>
            <li>Validation-driven UI</li>
          </ol>

          <Tip title="Mental model 🧠">
            Form + State + Rules = Dynamic UI
          </Tip>
        </div>

        {/* FORM */}
        <div id="form" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">SwiftUI Form & Section</h2>

          <CodeBlock>{`Form {
    Section(header: Text("Personal Information")) {
        TextField("Name", text: $customer.name)
    }
}`}</CodeBlock>

          <Tip title="Why Form matters">
            <code>Form</code> automatically handles scrolling, spacing, and platform styling.
          </Tip>
        </div>

        {/* STATE & OBSERVABLE */}
        <div id="state-observable" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">@State & @Observable</h2>

          <CodeBlock>{`@State var customer = Customer()

@Observable
class Customer {
    var name: String = ""
    var email: String = ""
}`}</CodeBlock>

          <Tip title="Key difference">
            <code>@Observable</code> lets the entire model notify SwiftUI when data changes.
          </Tip>
        </div>

        {/* TEXTFIELD VALIDATION */}
        <div id="textfield-validation" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">TextField & Validation</h2>

          <CodeBlock>{`if let err = validation.nameError {
    errorText(err)
}`}</CodeBlock>

          <Tip title="Best practice">
            Validation logic belongs in the model, not the View.
          </Tip>
        </div>

        {/* DATEPICKER */}
        <div id="datepicker" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">DatePicker & Age Logic</h2>

          <CodeBlock>{`DatePicker(
    "Birth Date",
    selection: $customer.birthDate,
    in: ...sixteenYearsAgo,
    displayedComponents: .date
)`}</CodeBlock>

          <Tip title="Why limit dates">
            Prevents invalid input before it happens.
          </Tip>
        </div>

        {/* TOGGLE & STEPPER */}
        <div id="toggle-stepper" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Toggle & Stepper</h2>

          <CodeBlock>{`Toggle("Are you a CAA member?", isOn: $customer.isCAAmember)

Stepper(value: $customer.numberOfCars, in: 1...5) {
    Text("Cars: \\(customer.numberOfCars)")
}`}</CodeBlock>

          <Tip title="Use case">
            Toggles = on/off rules, Steppers = bounded numeric input.
          </Tip>
        </div>

        {/* PICKERS */}
        <div id="picker" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Picker Styles</h2>

          <CodeBlock>{`Picker("Duration", selection: $customer.durationMonth) {
    Text("6").tag(6)
    Text("12").tag(12)
    Text("24").tag(24)
}
.pickerStyle(.palette)`}</CodeBlock>

          <Tip title="Picker tip">
            Different picker styles communicate different intent to users.
          </Tip>
        </div>

        {/* CONDITIONAL UI */}
        <div id="conditional-ui" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Conditional UI</h2>

          <CodeBlock>{`if customer.isEligible {
    Section(header: Text("Insurance Requirements")) {
        Toggle(...)
    }
}`}</CodeBlock>

          <Tip title="SwiftUI superpower">
            UI visibility is just normal Swift logic.
          </Tip>
        </div>

        {/* MINI APP */}
        <div id="insurance-app" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Mini App: Insurance Quote Form
          </h2>

          <p className="mt-3">
            This app combines validation, business rules, and UI controls into one flow.
          </p>

          <Tip title="Real-world takeaway">
            This pattern is common in production iOS apps.
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Key Takeaways
          </h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>Forms organize complex input</li>
            <li>Models handle validation</li>
            <li>Pickers simplify constrained choices</li>
            <li>UI reacts automatically to rules</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
