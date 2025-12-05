import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import marbleTexture from "@/assets/marble-texture.jpg";

// Import team photos
import estevanPhoto from "@/assets/team/estevan.jpg";
import arthurPhoto from "@/assets/team/arthur.jpg";
import anaCarolinaAraujoPhoto from "@/assets/team/ana-carolina-araujo.jpg";
import anaCarolinaCarvalhoPhoto from "@/assets/team/ana-carolina-carvalho.jpg";
import angelikaPhoto from "@/assets/team/angelika.jpg";
import damarisPhoto from "@/assets/team/damaris.jpg";
import tiberioPhoto from "@/assets/team/tiberio.jpg";
import marcoPhoto from "@/assets/team/marco.jpg";
import lailaPhoto from "@/assets/team/laila.jpg";
import joaoVictorBradleyPhoto from "@/assets/team/fotojoaobradley.jpg";
import anaCarolinaRamosPhoto from "@/assets/team/fotocarolramos.jpg";
import aliceRaposoPhoto from "@/assets/team/fotoaliceraposo.jpg";
import luizFelipePhoto from "@/assets/team/fotoluizfelipe.jpg";
import matheusCavalcantiPhoto from "@/assets/team/fotomatheus.jpg";
import analeciaRamosPhoto from "@/assets/team/fotoanalecia.jpg";
import anaKarolinaMendoncaPhoto from "@/assets/team/fotoanakarolina.jpg";

interface TeamMember {
  name: string;
  role: string;
  category: "socio" | "head" | "advogado" | "equipe";
  languages: string[];
  areas: string[];
  description: string;
  email: string;
  linkedin?: string;
  phone: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  // Sócios
  {
    name: "Estevan De Barros Lins",
    role: "Sócio Fundador",
    category: "socio",
    languages: ["Português"],
    areas: [],
    description: "Sócio-fundador do Lins Neves Advocacia, é formado pela Faculdade Boa Viagem (FBV) e atua há mais de 8 anos na condução estratégica das áreas tributária e empresarial do escritório, com presença marcante nos setores industrial, comercial e de prestação de serviços.\n\nSua atuação abrange o contencioso, o consultivo e o planejamento tributário e empresarial, com experiência consistente tanto nas esferas administrativa quanto judicial, assessorando empresas em demandas de alta complexidade e relevância econômica.\n\nEspecialista em Direito Tributário pelo INSPER/SP, instituição na qual também concluiu as formações em Contabilidade para Não Contadores, Compliance e Reforma Tributária – IVA no Brasil, possui ainda especialização em Direito Tributário e Contabilidade Tributária pelo IBET.\n\nAtualmente, cursa pós-graduação em Direito Societário no Instituto Luiz Mário Moutinho/PE, ampliando sua atuação voltada à eficiência estratégica de negócios.",
    email: "estevan@linsneves.adv.br",
    linkedin: "https://br.linkedin.com/in/estevan-de-barros-lins-301a4667",
    phone: "(81) 9.8944-3214",
    photo: estevanPhoto
  },
  {
    name: "Arthur Rodrigues da Costa Neves",
    role: "Sócio",
    category: "socio",
    languages: ["Português"],
    areas: [],
    description: "Sócio e coordenador da área de Direito Regulatório do Lins Neves Advocacia. Especializado em Direito Administrativo pela Universidade Federal de Pernambuco (UFPE) e pós-graduando em Direito Marítimo e Portuário pela Universidade Católica de Santos (UNISANTOS), desenvolve sua atuação com ênfase em infraestrutura, parcerias público-privadas e inovação tecnológica.\n\nNo setor público, exerce o cargo de Conselheiro Fiscal em duas autoridades portuárias brasileiras, com mandato até 2027. Atuou como Diretor do Complexo Industrial Portuário de Suape, onde liderou iniciativas estratégicas de inteligência de mercado, incluindo a implementação do Estudo de Complexidade Econômica em parceria com a UNCTAD/ONU.\n\nAo longo de sua trajetória, esteve à frente da consolidação de projetos portuários e industriais que superam R$ 5 bilhões em investimentos privados, contribuindo de forma decisiva para o fortalecimento da infraestrutura logística e para o desenvolvimento econômico sustentável do setor.",
    email: "arthurneves@linsneves.adv.br",
    linkedin: "https://br.linkedin.com/in/arthur-neves-508451101",
    phone: "(81) 9.8944-3214",
    photo: arthurPhoto
  },
  // Heads
  {
    name: "Ana Carolina Cavalcante Araújo",
    role: "Head da Área Trabalhista",
    category: "head",
    languages: ["Português", "Espanhol", "Inglês", "Francês"],
    areas: ["Direito Trabalhista"],
    description: "É advogada e Head da área Trabalhista no escritório Lins Neves Advocacia, possui mais de 12 anos de experiência no Direito do Trabalho.\n\nSua carreira foi construída em renomados escritórios, consolidando ampla expertise na assessoria jurídica trabalhista empresarial, com atuação estratégica na defesa de interesses patronais.\n\nCom experiência na condução e gestão de mais de 30 jurídicos trabalhistas de empresas de diversos segmentos, Ana Carolina destaca-se pela liderança na coordenação de equipes e pela busca constante de excelência técnica.\n\nÉ graduada em Direito pela Universidade Católica de Pernambuco (UNICAP), pós-graduada em Direito Processual Civil e do Trabalho pela Escola Superior da Magistratura Trabalhista (ESMATRA) e membra da Comissão de Direito do Trabalho da OAB/PE.",
    email: "carolinaaraujo@linsneves.adv.br",
    linkedin: "https://linkedin.com/in/ana-carolina-araújo-780703263",
    phone: "(81) 9.8944-3214",
    photo: anaCarolinaAraujoPhoto
  },
  {
    name: "Ana Carolina de Araújo Carvalho",
    role: "Head da Área Tributária",
    category: "head",
    languages: ["Português", "Inglês"],
    areas: ["Direito Tributário"],
    description: "Advogada com 15 anos de atuação em Direito Tributário, desenvolve trabalho estratégico nos âmbitos administrativo e judicial, com ampla experiência na condução de demandas de alta complexidade, assessora empresas de diversos segmentos econômicos, liderando soluções voltadas à eficiência fiscal e à segurança jurídica.\n\nFormada em Direito pela Universidade Católica de Pernambuco (UNICAP), é especialista em Direito Tributário pelo Instituto Brasileiro de Estudos Tributários (IBET), onde também cursou Contabilidade para Advogados. Atualmente cursa o Programa de Formação em Reforma Tributária pela Faculdade Brasileira de Tributação (FBT), ampliando sua atuação no novo sistema tributário nacional.",
    email: "carolinacarvalho@linsneves.adv.br",
    phone: "(81) 9.8944-3214",
    photo: anaCarolinaCarvalhoPhoto
  },
  {
    name: "Angélika Souza Veríssimo da Costa",
    role: "Head da Área Administrativa",
    category: "head",
    languages: ["Português"],
    areas: ["Direito Administrativo"],
    description: "Advogada especialista em Direito Administrativo, com mais de 20 anos de experiência na advocacia, com prática em assessoria empresarial e mais de 10 anos de atuação dedicada ao Direito Administrativo.\n\nGraduada em Direito pela Universidade Católica de Pernambuco (UNICAP), possui sólida trajetória em demandas judiciais e ampla experiência em processos administrativos, notadamente em licitações, contratos administrativos, concessões comuns, parcerias público-privadas e assuntos relacionados a agentes públicos.\n\nDetém Mestrado em Direito pela Universidade Federal de Pernambuco (UFPE), na linha de pesquisa Estado, Regulação e Tributação Indutora, além de Especialização em Direito Administrativo pela mesma instituição.\n\nExerceu funções estratégicas na Administração Pública, incluindo a atuação como Superintendente de Planejamento e Orçamento da Fundação de Atendimento Socioeducativo de Pernambuco (FUNASE) e como Assessora Jurídica da Secretaria de Saúde do Município de Abreu e Lima.",
    email: "Angelika.souza@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/angelika-verissimo-32719726a",
    phone: "(81) 9.8944-3214",
    photo: angelikaPhoto
  },
  {
    name: "Damaris T. Cavalcanti Maciel",
    role: "Head da Área Cível e Contratual",
    category: "head",
    languages: ["Português"],
    areas: ["Contencioso Cível", "Direito Contratual", "Direito Empresarial", "Recuperação Judicial"],
    description: "Responsável pela gestão da Área Cível do Lins Neves Advocacia, atuando de forma estratégica na condução de demandas complexas e na coordenação das operações jurídicas do setor.\n\nGraduada em Direito e pós-graduada em Direito Civil e Empresarial pela Faculdade de Direito do Recife – UFPE, reúne mais de uma década de experiência na área.\n\nSua atuação envolve a condução de casos cíveis e empresariais tanto no consultivo quanto no contencioso, unindo rigor técnico, visão analítica e capacidade de gestão. Damaris lidera a equipe do departamento cível, estruturando fluxos de trabalho, padronizando procedimentos e assegurando a eficiência e a qualidade nos atendimentos.\n\nCom forte orientação para resultados, Damaris atua na integração entre técnica jurídica, gestão e eficiência operacional, contribuindo diretamente para a excelência e a solidez institucional do setor cível do escritório.",
    email: "damariscavalcanti@linsneves.adv.br",
    linkedin: "https://br.linkedin.com/in/damaris-cavalcanti-42422290",
    phone: "(81) 9.8944-3214",
    photo: damarisPhoto
  },
  {
    name: "Tibério Almeida Leite",
    role: "Head da Área Societária, Imobiliário e Empresarial",
    category: "head",
    languages: ["Português"],
    areas: ["Direito Imobiliário", "Direito Societário", "Direito Empresarial", "Recuperação Judicial e Falência"],
    description: "Responsável pelas áreas Societária, Imobiliária, Contratual, Recuperação Judicial e Falência do Lins Neves Advocacia, atuando de forma estratégica na condução de operações empresariais e na orientação jurídica de negócios de alta complexidade.\n\nAdvogado inscrito na OAB/AL e OAB/PE, com formação e especialização voltadas ao Direito Imobiliário e Empresarial. Bacharel em Direito pela Universidade Estácio de Alagoas, é pós-graduado em Advocacia Imobiliária e Negocial pela EBRADI e possui LL.M. em Direito e Mercado Imobiliário pelo Instituto Luiz Mário Moutinho.\n\nSua experiência engloba a estruturação de operações imobiliárias complexas, regularizações fundiárias, contratos empresariais, operações built to suit, locações corporativas, projetos de arrendamentos portuários e disputas envolvendo empreendimentos logísticos e industriais.\n\nÉ membro do IBRADIM, Administrador Judicial credenciado ao Tribunal de Justiça de Alagoas e integrante da Comissão de Direito Aduaneiro e Comércio Exterior (CODACE) da OAB/PE.",
    email: "tiberioleite@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/tiberioleite/",
    phone: "(81) 9.8944-3214",
    photo: tiberioPhoto
  },
  // Advogados
  {
    name: "Marco Belém Specht",
    role: "Advogado",
    category: "advogado",
    languages: ["Português", "Inglês"],
    areas: ["Direito Empresarial", "Direito Contratual", "Direito Societário", "Recuperação Judicial e Falência"],
    description: "Bacharel em Direito pela Universidade Católica de Pernambuco (UNICAP), Especialista em Direito Contratual pela Faculdade de Direito do Recife (UFPE/FDR), aluno da Escola de Formação em Advocacia Empresarial (EFAE) e pós-graduando em Direito Marítimo e Portuário pela Universidade Católica de Santos (UNISANTOS).\n\nSua atuação é dedicada ao Direito Empresarial, com experiência em fusões e aquisições de empresas, condução de processos de due diligence, estruturação e reorganizações societárias, resolução de conflitos entre sócios, recuperações judiciais e assessoramento na implementação de novos negócios, sempre com foco em segurança jurídica e governança corporativa.\n\nPossui experiência na atuação em departamentos jurídicos de empresas multinacionais, envolvendo a negociação e gestão de contratos complexos em âmbito internacional, participação em operações societárias transnacionais, análise e mitigação de riscos empresariais, resolução de demandas corporativas e suporte técnico em litígios cíveis.",
    email: "marcospecht@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/marco-bel%C3%A9m-specht-aa1536175/",
    phone: "(81) 9.8944-3214",
    photo: marcoPhoto
  },
  {
    name: "Laila Marques",
    role: "Advogada",
    category: "advogado",
    languages: ["Português", "Inglês"],
    areas: ["Direito Tributário"],
    description: "Formada em Direito pela Universidade Federal de Pernambuco (UFPE) em 2023, atua na área tributária desde o início de sua trajetória, com experiência tanto no consultivo quanto no contencioso. Atualmente, cursa a Especialização em Direito Tributário pelo IBET, com conclusão prevista para junho de 2026, aprofundando-se em temas centrais da tributação brasileira.\n\nDurante a graduação, participou do curso completo de \"Introdução e Atualização em Direito Tributário\", oferecido pelo IBDT, além de ter ampliado sua formação com o curso \"Introduction to Corporate Finance\", da Columbia University.\n\nFluente em inglês, possui formação acadêmica bilíngue, fruto do ensino médio americano cursado em parceria com a Texas Tech University e de intercâmbio no Reino Unido.",
    email: "lailamarques@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/laila-marques-7981b31b9",
    phone: "(81) 9.8944-3214",
    photo: lailaPhoto
  },
  // Equipe de Apoio
  {
    name: "João Victor Bradley",
    role: "Assistente Jurídico administrativo",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Estudante de Direito da Universidade Católica de Pernambuco – UNICAP\n\nAssistente Jurídico administrativo",
    email: "joaobradley@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/joão-victor-bradley-a02090211",
    phone: "(81) 9.8944-3214",
    photo: joaoVictorBradleyPhoto
  },
  {
    name: "Ana Carolina Ramos",
    role: "Assistente Jurídica Cível",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Estudante de Direito da Universidade Católica de Pernambuco – UNICAP\n\nAssistente Jurídica Cível",
    email: "anacarolina@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/ana-carolina-ramos-47b5b6223",
    phone: "(81) 9.8944-3214",
    photo: anaCarolinaRamosPhoto
  },
  {
    name: "Alice Raposo Figueiredo",
    role: "Estagiária da equipe trabalhista",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Estudante de Direito da Faculdade Nova Roma - FNR\n\nEstagiária da equipe trabalhista",
    email: "aliceraposo@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/alice-raposo-bb21322bb",
    phone: "(81) 9.8944-3214",
    photo: aliceRaposoPhoto
  },
  {
    name: "Luiz Felipe Vieira",
    role: "Estagiário da equipe Tributária",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Estudante de Direito da Universidade Católica de Pernambuco – UNICAP\n\nEstagiário da equipe Tributária",
    email: "felipevieira@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/luiz-felipe-vieira-5878472ab",
    phone: "(81) 9.8944-3214",
    photo: luizFelipePhoto
  },
  {
    name: "Matheus Cavalcanti de Santana",
    role: "Estagiário da equipe Cível",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Estudante de Direito da Universidade Católica de Pernambuco – UNICAP\n\nEstagiário da equipe Cível",
    email: "matheus.cavalcanti@linsneves.adv.br",
    linkedin: "https://www.linkedin.com/in/matheus-cavalcanti-0a9975236",
    phone: "(81) 9.8944-3214",
    photo: matheusCavalcantiPhoto
  },
  {
    name: "Analécia Ramos",
    role: "Secretária",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Secretária",
    email: "analecia@linsneves.com.br",
    phone: "(81) 9.8944-3214",
    photo: analeciaRamosPhoto
  },
  {
    name: "Ana Karolina Mendonça",
    role: "Assistente administrativa",
    category: "equipe",
    languages: ["Português"],
    areas: [],
    description: "Assistente administrativa",
    email: "karolinamendonca@linsneves.adv.br",
    phone: "(81) 9.8944-3214",
    photo: anaKarolinaMendoncaPhoto
  }
];

const TeamMemberCard = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  // Pessoas que precisam ter a foto subida
  const needsHigherPosition = [
    "Ana Carolina de Araújo Carvalho",
    "Angélika Souza Veríssimo da Costa",
    "Damaris T. Cavalcanti Maciel",
    "Tibério Almeida Leite",
    "Marco Belém Specht",
    "Laila Marques"
  ];
  
  // Pessoas que precisam ter a foto mais à direita
  const needsRightPosition = [
    "Ana Carolina de Araújo Carvalho",
    "Laila Marques"
  ];
  
  // Pessoas que precisam ter a foto ainda mais à direita (40% mais)
  const needsMoreRightPosition = [
    "Ana Carolina de Araújo Carvalho"
  ];
  
  // Pessoas da equipe de apoio que precisam ter a foto subida
  const equipeApoio = [
    "Alice Raposo Figueiredo",
    "Luiz Felipe Vieira",
    "Matheus Cavalcanti de Santana",
    "Analécia Ramos",
    "Ana Karolina Mendonça"
  ];
  
  let objectPosition;
  if (member.name === "Arthur Rodrigues da Costa Neves") {
    // Arthur precisa estar 100% centralizado
    objectPosition = 'center center';
  } else if (member.name === "João Victor Bradley") {
    objectPosition = 'center 40%';
  } else if (member.name === "Ana Carolina Ramos") {
    objectPosition = '150% -30%';
  } else if (equipeApoio.includes(member.name)) {
    objectPosition = 'center -30%';
  } else if (needsMoreRightPosition.includes(member.name)) {
    objectPosition = needsHigherPosition.includes(member.name) ? '87% top' : '87% center';
  } else if (needsRightPosition.includes(member.name)) {
    objectPosition = needsHigherPosition.includes(member.name) ? 'right top' : 'right center';
  } else {
    objectPosition = needsHigherPosition.includes(member.name) ? 'center top' : 'center center';
  }
  
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/70 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg w-48 h-60 ring-4 ring-accent/30 group-hover:ring-accent transition-all duration-300">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover" 
          style={{ 
            objectPosition: member.name === "Arthur Rodrigues da Costa Neves" ? '150% center' : 
                          member.name === "Ana Carolina de Araújo Carvalho" ? '150% -10%' :
                          member.name === "João Victor Bradley" ? 'center 40%' :
                          member.name === "Ana Carolina Ramos" ? '150% -30%' : objectPosition, 
            transform: member.name === "Arthur Rodrigues da Costa Neves" ? 'scale(1.6) translateX(10%)' : 
                      member.name === "Ana Carolina de Araújo Carvalho" ? 'scale(1.6) translateX(10%)' :
                      member.name === "Ana Carolina Ramos" ? 'scale(1.6) translateX(10%)' : 'scale(1.3)',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      
      <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300 mb-1">
        {member.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
      
      <p className="text-primary text-sm mb-3">{member.phone}</p>
      
      <div className="flex items-center gap-3">
        <a 
          href={`mailto:${member.email}`}
          onClick={(e) => e.stopPropagation()}
          className="text-accent hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
        {member.linkedin && (
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-accent hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamMemberModal = ({ member, isOpen, onClose }: { member: TeamMember | null; isOpen: boolean; onClose: () => void }) => {
  if (!member) return null;

  // Calcular objectPosition e transform para o modal (mesma lógica do card)
  const needsHigherPosition = [
    "Ana Carolina de Araújo Carvalho",
    "Angélika Souza Veríssimo da Costa",
    "Damaris T. Cavalcanti Maciel",
    "Tibério Almeida Leite",
    "Marco Belém Specht",
    "Laila Marques"
  ];
  
  const needsRightPosition = [
    "Ana Carolina de Araújo Carvalho",
    "Laila Marques"
  ];
  
  const needsMoreRightPosition = [
    "Ana Carolina de Araújo Carvalho"
  ];
  
  // Pessoas da equipe de apoio que precisam ter a foto subida
  const equipeApoio = [
    "Alice Raposo Figueiredo",
    "Luiz Felipe Vieira",
    "Matheus Cavalcanti de Santana",
    "Analécia Ramos",
    "Ana Karolina Mendonça"
  ];
  
  let objectPosition;
  if (member.name === "Arthur Rodrigues da Costa Neves") {
    objectPosition = '150% center';
  } else if (member.name === "Ana Carolina de Araújo Carvalho") {
    objectPosition = '150% -10%';
  } else if (member.name === "João Victor Bradley") {
    objectPosition = 'center 40%';
  } else if (member.name === "Ana Carolina Ramos") {
    objectPosition = '150% -30%';
  } else if (equipeApoio.includes(member.name)) {
    objectPosition = 'center -30%';
  } else if (needsMoreRightPosition.includes(member.name)) {
    objectPosition = needsHigherPosition.includes(member.name) ? '87% top' : '87% center';
  } else if (needsRightPosition.includes(member.name)) {
    objectPosition = needsHigherPosition.includes(member.name) ? 'right top' : 'right center';
  } else {
    objectPosition = needsHigherPosition.includes(member.name) ? 'center top' : 'center center';
  }
  
  let transform;
  if (member.name === "Arthur Rodrigues da Costa Neves" || member.name === "Ana Carolina de Araújo Carvalho" || member.name === "Ana Carolina Ramos") {
    transform = 'scale(1.6) translateX(10%)';
  } else {
    transform = 'scale(1.3)';
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{member.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-4">
            <div className="w-32 h-40 overflow-hidden rounded-lg ring-4 ring-primary/20">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover" 
                style={{ 
                  objectPosition: objectPosition, 
                  transform: transform,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            
            <div className="space-y-3 text-sm">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all">{member.email}</span>
              </a>
              
              <a 
                href={`tel:${member.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </a>
              
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary">{member.name}</h2>
              <p className="text-accent font-medium">{member.role}</p>
            </div>
            
            <div>
              <h4 className="text-accent text-sm font-medium mb-2">Idiomas</h4>
              <p className="text-foreground">{member.languages.join(' • ')}</p>
            </div>
            
            {member.areas.length > 0 && (
              <div>
                <h4 className="text-accent text-sm font-medium mb-2">Áreas de atuação</h4>
                <div className="flex flex-wrap gap-2">
                  {member.areas.map((area, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <div className="text-foreground whitespace-pre-line leading-relaxed">
                {member.description}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main 
        className="pt-32 pb-20 relative"
        style={{ 
          backgroundImage: `url(${marbleTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossa Equipe
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Conheça os profissionais que fazem o Lins Neves Advocacia
          </p>

          {/* Todos os membros juntos */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={index}
                  member={member} 
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <TeamMemberModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TeamPage;