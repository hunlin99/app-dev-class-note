import BackBtn from "../../components/back-btn"

const links = [
  { name: "Session Overview", href: "#overview" },
  { name: "VStack / HStack / ZStack", href: "#stacks" },
  { name: "Alignment & Spacing", href: "#alignment" },
  { name: "ScrollView", href: "#scrollview" },
  { name: "LazyVGrid & LazyHGrid", href: "#grids" },
  { name: "Custom Components", href: "#components" },
  { name: "Environment & openURL", href: "#environment" },
  { name: "Mini App: Contact Card", href: "#contact-card" },
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

export default function IOSSession3() {
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
              iOS Development — Session 3
            </h2>

            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              Mastering <b>SwiftUI Layout System</b>: Stacks, Grids, ScrollView,
              alignment, spacing, and reusable components.
              <br />
              Goal: understand how SwiftUI arranges and layers views.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>VStack</Badge>
              <Badge>HStack</Badge>
              <Badge>ZStack</Badge>
              <Badge>LazyVGrid</Badge>
              <Badge>ScrollView</Badge>
              <Badge>Environment</Badge>
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
            This session explores how SwiftUI arranges views using stacks,
            grids, and layout modifiers.
          </p>

          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>Stack layouts (VStack, HStack, ZStack)</li>
            <li>Alignment & spacing control</li>
            <li>ScrollView behavior</li>
            <li>Lazy grids for performance</li>
            <li>Reusable UI components</li>
          </ol>

          <Tip title="Core idea 🧠">
            SwiftUI layout = Containers + Modifiers + Alignment rules
          </Tip>
        </div>

        {/* STACKS */}
        <div id="stacks" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            VStack / HStack / ZStack
          </h2>

          <CodeBlock>{`VStack {
    Circle()
    Rectangle()
}

HStack {
    Image(systemName: "person.fill")
}

ZStack {
    Rectangle()
    Circle()
}`}</CodeBlock>

          <Tip title="When to use what?">
            VStack = vertical stacking  
            HStack = horizontal stacking  
            ZStack = layering (depth)
          </Tip>
        </div>

        {/* ALIGNMENT */}
        <div id="alignment" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Alignment & Spacing
          </h2>

          <CodeBlock>{`VStack(alignment: .leading, spacing: 50) {
    Circle()
    Rectangle()
}

HStack(alignment: .top, spacing: 80) {
    Circle()
    Image(systemName: "person.fill")
}`}</CodeBlock>

          <Tip title="Important">
            Alignment controls positioning inside the stack.
            Spacing controls distance between elements.
          </Tip>
        </div>

        {/* SCROLLVIEW */}
        <div id="scrollview" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">ScrollView</h2>

          <CodeBlock>{`ScrollView(.horizontal) {
    Text("Scrollable content")
}`}</CodeBlock>

          <Tip title="Why ScrollView matters">
            It allows content larger than the screen to be scrollable.
          </Tip>
        </div>

        {/* GRIDS */}
        <div id="grids" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            LazyVGrid & LazyHGrid
          </h2>

          <CodeBlock>{`LazyVGrid(columns: [
    GridItem(.adaptive(minimum: 80))
]) {
    ForEach(emojis) { emoji in
        EmojiCell(emoji: emoji)
    }
}`}</CodeBlock>

          <Tip title="Why 'Lazy'?">
            Lazy grids load items only when needed — better performance.
          </Tip>
        </div>

        {/* COMPONENTS */}
        <div id="components" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Custom Reusable Components
          </h2>

          <CodeBlock>{`struct ContactButton: View {
    var title: String
    var action: () -> Void
}`}</CodeBlock>

          <Tip title="Best practice">
            Break complex UI into smaller reusable views.
          </Tip>
        </div>

        {/* ENVIRONMENT */}
        <div id="environment" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            @Environment & openURL
          </h2>

          <CodeBlock>{`@Environment(\\.openURL) var openURL

if let phoneURL = URL(string: "tel://+1234567890") {
    openURL(phoneURL)
}`}</CodeBlock>

          <Tip title="What is Environment?">
            It allows access to system-level services.
          </Tip>
        </div>

        {/* CONTACT CARD */}
        <div id="contact-card" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Mini App: Contact Card Layout
          </h2>

          <p className="mt-3">
            Combines ZStack layering, gradients, reusable buttons, and
            environment-based actions.
          </p>

          <Tip title="Real-world pattern">
            Profile screens often use stacked layout + reusable components.
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Key Takeaways
          </h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>Stacks define layout direction</li>
            <li>Alignment & spacing refine positioning</li>
            <li>Lazy grids improve performance</li>
            <li>Environment gives access to system services</li>
          </ul>
        </div>

      </section>
    </main>
  )
}
