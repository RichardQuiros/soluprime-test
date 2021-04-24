let document_lorem = `# Lorem ipsum

![](https://picsum.photos/1000/500)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus nisl sed pellentesque elementum. In hac habitasse platea dictumst. Integer maximus venenatis orci, ut tristique neque tempor non. Nulla facilisi. Aliquam ut euismod tellus. Praesent dignissim ornare orci, sed rhoncus libero sollicitudin at. Suspendisse ex enim, feugiat sed orci ut, viverra tempor enim. Quisque dignissim ullamcorper erat vitae lacinia. Vestibulum in augue ac nibh feugiat laoreet. Aenean blandit maximus ornare.

## More lorem
Sed molestie felis quis quam imperdiet consectetur. Ut aliquet dignissim sapien, vitae tristique nibh pretium quis. In sit amet ipsum neque. Etiam a risus vehicula, tempor nisl at, pellentesque libero. Duis ultrices pretium ex at blandit. Pellentesque commodo arcu id libero aliquet feugiat. Duis rutrum condimentum odio at commodo.

Aliquam erat volutpat. Aliquam mollis neque augue, vel condimentum nunc volutpat eu. Aenean sapien risus, vestibulum et tortor vel, efficitur imperdiet dolor. Donec iaculis congue urna, et vulputate lorem euismod at. Aenean eu metus non eros dictum lacinia. Donec turpis tortor, placerat non viverra vitae, molestie id tortor. Integer hendrerit pellentesque porta. Etiam vel gravida lorem. Vestibulum quis lacus non lorem ultrices porta. Maecenas ornare orci eu mi lacinia, et volutpat tortor rhoncus.

>Quisque vitae tortor ut urna efficitur tristique in non nisl. Maecenas facilisis arcu ac justo ultricies, nec iaculis felis imperdiet. Quisque sed consequat lorem. Cras commodo velit sed tempor tristique. Nunc ultrices mauris imperdiet, rhoncus arcu elementum, pretium justo. Curabitur velit turpis, venenatis ut mi nec, consequat pellentesque risus. Pellentesque vitae consectetur mi. Nam iaculis lorem in odio eleifend mattis. Nam ultricies efficitur quam, at congue eros euismod sit amet. Maecenas egestas interdum odio, a commodo nulla tristique convallis. Nunc elementum cursus malesuada. Proin tempus ultricies velit, eu iaculis velit dictum sit amet.

Integer et elit accumsan, laoreet urna commodo, iaculis felis. Pellentesque eget lorem ut augue finibus tincidunt eget sit amet nunc. Fusce vel ante ut neque ullamcorper vehicula quis sed lectus. Phasellus viverra pulvinar lorem, vel consectetur purus varius at. Quisque ac turpis ac enim pellentesque ultricies. Integer ornare, erat eget lacinia dignissim, mi risus euismod purus, quis tincidunt dui nisi ac orci. Quisque maximus fringilla placerat. Sed lacinia, justo at porttitor porttitor, mauris sem eleifend libero, ut tempus nisl erat et ante. Etiam interdum purus nulla, sit amet mattis quam pretium sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam orci tellus, vulputate ut ornare vitae, volutpat ut massa. Sed sit amet quam cursus, lobortis odio in, malesuada sapien.`
export const state = () => ({
 services: [
    { title: 'cloud',icon:'mdi-cloud-braces',link:'/services/cloud'},
    { title: 'infraestructura',icon:'mdi-server',link:'/services/infraestructura'},
    { title: 'desarrollo de software',icon:'mdi-code-greater-than',link:'/services/desarrollo de software'},
    { title: 'generacion de marca',icon:'mdi-sticker-check',link:'/services/generacion de marca'},
    { title: 'outsourcing',icon:'mdi-account-multiple-check',link:'/services/outsourcing'},
  ],
  document_lorem: [{document:document_lorem}],
})
