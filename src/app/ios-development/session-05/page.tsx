import BackBtn from "../../components/back-btn"

const links = [
  { name: "Session Overview", href: "#overview" },
  { name: "List Basics", href: "#list-basics" },
  { name: "Identifiable & ForEach", href: "#identifiable" },
  { name: "Edit Mode (Move/Delete)", href: "#edit-mode" },
  { name: "Custom Row Design", href: "#custom-row" },
  { name: "Sectioned Lists", href: "#sections" },
  { name: "Hierarchical List", href: "#hierarchy" },
  { name: "Settings Style List", href: "#settings" },
  { name: "Key Takeaways + Mini Quiz", href: "#takeaways" },
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
              iOS Development — Session 5
            </h2>

            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              Building dynamic lists using <b>List</b>, <b>ForEach</b>, and 
              <b>Identifiable models</b>.
              <br />
              Goal: render, edit, organize, and customize data-driven UI.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>List</Badge>
              <Badge>ForEach</Badge>
              <Badge>Identifiable</Badge>
              <Badge>Section</Badge>
              <Badge>.onDelete</Badge>
              <Badge>.onMove</Badge>
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
            This session introduces SwiftUI’s powerful <b>List</b> system
            and how to manage structured and hierarchical data.
          </p>

          <Tip title="Big shift 🧠">
            UI is no longer static — it now renders from real data models.
          </Tip>
        </div>

        {/* LIST BASICS */}
        <div id="list-basics" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">List Basics</h2>

          <CodeBlock>{`List(wildAnimals) { animal in
    Text(animal.name)
}`}</CodeBlock>

          <Tip title="Why List?">
            Automatically provides scrolling, separators, and native styling.
          </Tip>
        </div>

        {/* IDENTIFIABLE */}
        <div id="identifiable" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Identifiable & ForEach
          </h2>

          <CodeBlock>{`struct Animal: Identifiable {
    let id = UUID()
    let name: String
}`}</CodeBlock>

          <Tip title="Important concept">
            SwiftUI needs a unique ID to track changes efficiently.
          </Tip>
        </div>

        {/* EDIT MODE */}
        <div id="edit-mode" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Edit Mode (Move & Delete)
          </h2>

          <CodeBlock>{`.onMove { source, destination in
    wildAnimals.move(fromOffsets: source, toOffset: destination)
}

.onDelete { index in
    wildAnimals.remove(atOffsets: index)
}`}</CodeBlock>

          <Tip title="Power feature">
            Lists can be rearranged and deleted with built-in gestures.
          </Tip>
        </div>

        {/* CUSTOM ROW */}
        <div id="custom-row" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Custom Row Design
          </h2>

          <CodeBlock>{`struct CarListItem: View {
    let car: Car

    var body: some View {
        HStack {
            Image(systemName: car.imageName)
            Text(car.model)
        }
    }
}`}</CodeBlock>

          <Tip title="Best practice">
            Separate row UI into reusable components.
          </Tip>
        </div>

        {/* SECTIONS */}
        <div id="sections" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Sectioned Lists
          </h2>

          <CodeBlock>{`Section {
    ForEach(hyperCars) { car in
        CarListItem(car: car)
    }
} header: {
    Text("Hyper Cars")
}`}</CodeBlock>

          <Tip title="Why Sections?">
            Helps group related data visually.
          </Tip>
        </div>

        {/* HIERARCHY */}
        <div id="hierarchy" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Hierarchical List
          </h2>

          <CodeBlock>{`List(fileStructure, children: \.children) { file in
    Label(file.title, systemImage: "folder.fill")
}`}</CodeBlock>

          <Tip title="Advanced feature">
            Supports tree-style expandable lists.
          </Tip>
        </div>

        {/* SETTINGS */}
        <div id="settings" className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Settings Style List
          </h2>

          <CodeBlock>{`Section {
    TextField("Username", text: $username)
    Toggle("Private Account?", isOn: $isPrivate)
}`}</CodeBlock>

          <Tip title="Real-world usage">
            Settings screens commonly use List + Section + controls.
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Key Takeaways + Mini Quiz
          </h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>List renders dynamic data</li>
            <li>Identifiable enables efficient updates</li>
            <li>.onDelete and .onMove provide editing behavior</li>
            <li>Sections organize grouped content</li>
            <li>Hierarchical lists support nested data</li>
          </ul>

          <Tip title="Mini Quiz ✅">
            Why does SwiftUI require Identifiable for lists?
          </Tip>
        </div>

      </section>
    </main>
  )
}
