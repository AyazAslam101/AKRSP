const navigation = {
  main: [
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Donors", href: "/donors" },
  ],
  links: [
    {
      name: "About us",
      href: "/about",
      lists: [
        { name: "Who We Are", href: "/Programmes" },
        { name: "Governance", href: "/communication" },
        { name: "Management Structure", href: "/communication" },
        { name: "Future Directions", href: "/communication" },
        { name: "Releases", href: "/communication" },
      ],
    },
    {
      name: "Programmes",
      href: "/Programmes",
      lists: [
        { name: "Economic Pillar", href: "/communication" },
        {
          name: "Social Pillar",
          href: "/communication",
          menu: [
            {
              name: "Projects",
              order: [
                { name: "Ongoing", href: "/Ongoing" },
                { name: "Accomplished", href: "/Accomplished" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Communication",
      href: "/communication",
      lists: [
        { name: "Publications", href: "/" },
        { name: "Research", href: "/" },
        { name: "Case Studies", href: "/" },
        { name: "Annual Reports", href: "/" },
        { name: "Broushers", href: "/" },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      lists: [
        { name: "+92 (51)2801161-4", href: "/" },
        { name: "Info@akrsp.org.pk", href: "/" },
        { name: "Webmail", href: "/" },
        { name: "LSO PORTAL", href: "/" },
        { name: "Contact Us", href: "/" },
      ],
    },
    {
      name: "Opportunities",
      href: "/opportunities",
      lists: [
        { name: "Jobs", href: "/" },
        { name: "Consultancy", href: "/" },
        {
          name: "Services Procurement",
          href: "/",
          menu: [
            {
              name: "Projects",
              order: [
                { name: "Photo Gallery", href: "/Ongoing" },
                { name: "Video Gallery", href: "/Accomplished" },
              ],
            },
          ],
        },
      ],
    },
  ],
  lists: [
    { name: "Who We Are", href: "/Programmes" },
    { name: "Governance", href: "/communication" },
    { name: "Management Structure", href: "/communication" },
    {
      name: "Future Directions",
      href: "/communication",
      list: [
        { name: "Releases", href: "/communication" },
        { name: "Releases", href: "/communication" },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="container">
        <div className="py-14 overflow-hidden">
          <div className="grid grid-cols-2 lg:gap-1 md: sm:gap-4 gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {navigation?.links?.map((item, key) => (
              <div key={key} className="px-1 py-2 pl-14">
                <a href="#" className="text-primary font-medium text-xl">
                  {item?.name}
                </a>
                <div className="mt-4">
                  {item?.lists?.map((list, key) => (
                    <div key={key}>
                      <p className="p-2 -ml-2 font-normal text-base leading-7 hover:text-primary">
                        <a href="#">{list?.name}</a>
                      </p>
                      <div>
                        {list?.menu?.map((items: any, key: any) => (
                          <div key={key}>
                            <a
                              href="#"
                              className="text-primary font-medium text-xl mt-2"
                            >
                              {items?.name}
                            </a>
                            <div>
                              {items?.order?.map((items: any, key: any) => (
                                <div key={key}>
                                  <p className="p-2 -ml-2 font-normal text-base leading-7 hover:text-primary">
                                    {items?.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="block lg:flex justify-between md:grid-cols-2 sm:block items-baseline mb-1 container px-14 py-2">
          <div>
            <p className="text-center text-sm font-normal text-white">
              &copy;{new Date().getFullYear()} Aga Khan Rural Support Programme.
              Developer: AKRSP IT Department.
            </p>
          </div>
          <div className="flex justify-center text-center">
            {navigation.main.map((item: any, key: any) => (
              <div key={key} className="px-1 py-2 flex divide-x">
                <a
                  href="#"
                  className="text-sm font-normal text-white flex whitespace-nowrap"
                >
                  {item.name} <span className="ml-1">|</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
