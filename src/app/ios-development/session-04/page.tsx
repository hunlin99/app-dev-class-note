import BackBtn from "../../components/back-btn"

const links = [
  { name: "Session Overview", href: "#overview" },
  { name: "NavigationView", href: "#navigation" },
  { name: "ScrollView Layout", href: "#scrollview" },
  { name: "Segmented Picker", href: "#segmented-picker" },
  { name: "Slider Control", href: "#slider" },
  { name: "Menu Picker", href: "#menu-picker" },
  { name: "Graphical DatePicker", href: "#datepicker" },
  { name: "Dynamic Confirmation", href: "#confirmation" },
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

export default function IOSSession4() {
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
              iOS Development — Session 4
            </h2>

            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              Building interactive screens with <b>NavigationView</b>, 
              <b> segmented controls</b>, <b>sliders</b>, and dynamic confirmation logic.
              <br />
              Goal: combine layout + state + user interaction into a full screen experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>NavigationView</Badge>
              <Badge>ScrollView</Badge>
              <Badge>Segmented Picker</Badge>
              <Badge>Slider</Badge>
              <Badge>DatePicker</Badge>
              <Badge>Dynamic Text</Badge>
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
            This session focuses on combining navigation, scrolling layouts,
            interactive controls, and real-time user feedback.
          </p>

          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>NavigationView & navigationTitle</li>
            <li>ScrollView for flexible layouts</li>
            <li>Segmented & Menu pickers</li>
            <li>Slider input</li>
            <li>Date & time selection</li>
            <li>Dynamic confirmation message</li>
          </ol>

          <Tip title="Core concept 🧠">
            Interactive UI = State + Controls + Computed Output
          </Tip>
        </div>

        {/* NAVIGATION */}
        <div id="navigation" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">NavigationView</h2>

          <CodeBlock>{`NavigationView {
    ScrollView {
        VStack {
            Text("Fitness Tracker")
        }
    }
    .navigationTitle("Fitness Tracker")
}`}</CodeBlock>

          <Tip title="Why NavigationView?">
            It provides the navigation bar and screen structure for multi-screen apps.
          </Tip>
        </div>

        {/* SCROLLVIEW */}
        <div id="scrollview" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">ScrollView Layout</h2>

          <CodeBlock>{`ScrollView {
    VStack(spacing: 25) {
        // content
    }
}`}</CodeBlock>

          <Tip title="When to use ScrollView">
            Use it when content may exceed screen height.
          </Tip>
        </div>

        {/* SEGMENTED PICKER */}
        <div id="segmented-picker" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Segmented Picker</h2>

          <CodeBlock>{`Picker("Workout", selection: $selectedWorkout) {
    ForEach(0..<workoutTypes.count) { index in
        Text(workoutTypes[index])
    }
}
.pickerStyle(SegmentedPickerStyle())`}</CodeBlock>

          <Tip title="Why segmented style?">
            Best for small sets of mutually exclusive options.
          </Tip>
        </div>

        {/* SLIDER */}
        <div id="slider" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Slider Control</h2>

          <CodeBlock>{`Text("Workout Duration: \\(Int(duration)) minutes")
Slider(value: $duration, in: 10...120, step: 5)`}</CodeBlock>

          <Tip title="Key idea">
            Slider binds numeric state and updates UI instantly.
          </Tip>
        </div>

        {/* MENU PICKER */}
        <div id="menu-picker" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Menu Picker</h2>

          <CodeBlock>{`Picker("Sport", selection: $favoriteSport) {
    ForEach(sports, id: \\.self) { sport in
        Text(sport)
    }
}
.pickerStyle(MenuPickerStyle())`}</CodeBlock>

          <Tip title="Use case">
            Menu style works well for dropdown-like selections.
          </Tip>
        </div>

        {/* DATEPICKER */}
        <div id="datepicker" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Graphical DatePicker
          </h2>

          <CodeBlock>{`DatePicker(
    "Select Date",
    selection: $startDate,
    displayedComponents: [.date, .hourAndMinute]
)
.datePickerStyle(GraphicalDatePickerStyle())`}</CodeBlock>

          <Tip title="Why graphical style?">
            Provides a calendar-style date selection interface.
          </Tip>
        </div>

        {/* CONFIRMATION */}
        <div id="confirmation" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Dynamic Confirmation Message
          </h2>

          <CodeBlock>{`confirmationMessage = 
"Hi \\(name), your \\(workoutTypes[selectedWorkout]) session 
of \\(favoriteSport) (\\(Int(duration)) minutes) 
starts on \\(startDate.formatted(...))."`}</CodeBlock>

          <Tip title="Important concept">
            Swift string interpolation makes dynamic UI messages simple.
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Key Takeaways + Mini Quiz
          </h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>NavigationView structures the screen</li>
            <li>ScrollView handles flexible layouts</li>
            <li>SegmentedPicker simplifies option selection</li>
            <li>Slider provides numeric input</li>
            <li>DatePicker integrates calendar & time selection</li>
          </ul>
          
        </div>

      </section>
    </main>
  )
}
