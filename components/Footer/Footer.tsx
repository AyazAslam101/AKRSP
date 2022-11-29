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
      <div className="container sm:container lg:container md:container">
        <div className="py-10 overflow-hidden sm:px-6 lg:px-2">
          <div className="grid grid-cols-2 lg:gap-1 md:gap-16 sm:gap-4 gap-16 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
            {navigation?.links?.map((item, key) => (
              <div key={key} className="px-1 py-2 pl-14">
                <a
                  href={item?.href}
                  className="font-medium text-primary font-medium text-2xl"
                >
                  {item?.name}
                </a>
                <div className="mt-4">
                  {item?.lists?.map((list, key) => (
                    <div key={key}>
                      <p className="p-2 -ml-2 font-sans font-normal text-xl">
                        <a href={list?.href}>{list?.name}</a>
                      </p>
                      <div>
                        {list?.menu?.map((items: any, key: any) => (
                          <div key={key}>
                            <p className="font-medium text-primary font-medium text-2xl mt-2">
                              {items?.name}
                            </p>
                            <div>
                              {items?.order?.map((items: any, key: any) => (
                                <div key={key}>
                                  <p className="p-2 -ml-2 font-sans font-normal text-xl">
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
        <div className="block lg:flex justify-around md:grid-cols-2 sm:block items-baseline mb-1 programes-container px-20">
          <div>
            <p className="text-center text-base text-white">
              &copy;{new Date().getFullYear()} Aga Khan Rural Support Programme.
              Developer: AKRSP IT Department.
            </p>
          </div>
          <div className="flex justify-center text-center divide-x">
            {navigation.main.map((item: any, key: any) => (
              <div key={key} className="px-1 py-2 flex">
                <a href={item.href} className="text-base text-white">
                  {item.name}
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
