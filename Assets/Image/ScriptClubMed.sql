drop table if exists activite cascade;
drop table if exists activitealacarte cascade;
drop table if exists appartenir cascade;
drop table if exists avis cascade;
drop table if exists chambre cascade;
drop table if exists choisir cascade;
drop table if exists cibler cascade;
drop table if exists classer cascade;
drop table if exists client cascade;
drop table if exists commodite cascade;
drop table if exists documentation cascade;
drop table if exists domaineskiable cascade;
drop table if exists enregistrer cascade;
drop table if exists illustrer cascade;
drop table if exists lier cascade;
drop table if exists localisation cascade;
drop table if exists panier cascade;
drop table if exists partager cascade;
drop table if exists participant cascade;
drop table if exists pays cascade;
drop table if exists photo cascade;
drop table if exists piste cascade;
drop table if exists pointfort cascade;
drop table if exists posseder3 cascade;
drop table if exists posseder4 cascade;
drop table if exists proposer cascade;
drop table if exists recommander cascade;
drop table if exists regroupementclub cascade;
drop table if exists regrouper cascade;
drop table if exists reservation cascade;
drop table if exists resort cascade;
drop table if exists restaurant cascade;
drop table if exists trancheage cascade;
drop table if exists transport cascade;
drop table if exists typeactivite cascade;
drop table if exists typechambre cascade;
drop table if exists typeclub cascade;
drop table if exists video cascade;
drop table if exists partenaire cascade;
drop table if exists cartebancaire cascade;

-- Sequences
drop sequence if exists activite_numactivite_seq cascade;
drop sequence if exists avis_numavis_seq cascade;
drop sequence if exists chambre_idchambre_seq cascade;
drop sequence if exists client_numclient_seq cascade;
drop sequence if exists commodite_numcommodite_seq cascade;
drop sequence if exists documentation_numdocumentation_seq cascade;
drop sequence if exists domaineskiable_numdomaine_seq cascade;
drop sequence if exists localisation_numlocalisation_seq cascade;
drop sequence if exists panier_numpanier_seq cascade;
drop sequence if exists participant_numparticipant_seq cascade;
drop sequence if exists photo_numfichierphoto_seq cascade;
drop sequence if exists piste_numpiste_seq cascade;
drop sequence if exists pointfort_numpointfort_seq cascade;
drop sequence if exists regroupementclub_numregroupement_seq cascade;
drop sequence if exists reservation_numreservation_seq cascade;
drop sequence if exists resort_numresort_seq cascade;
drop sequence if exists restaurant_numrestaurant_seq cascade;
drop sequence if exists trancheage_numtrancheage_seq cascade;
drop sequence if exists transport_numtransport_seq cascade;
drop sequence if exists typeactivite_numtypeactivite_seq cascade;
drop sequence if exists typechambre_numtype_seq cascade;
drop sequence if exists typeclub_numtypeclub_seq cascade;
drop sequence if exists video_numfichiervideo_seq cascade;
drop sequence if exists partenaire_numpartenaire_seq cascade;
drop sequence if exists cartebancaire_idcarte_seq cascade;

create sequence activite_numactivite_seq;
create sequence avis_numavis_seq;
create sequence chambre_idchambre_seq;
create sequence client_numclient_seq;
create sequence commodite_numcommodite_seq;
create sequence documentation_numdocumentation_seq;
create sequence domaineskiable_numdomaine_seq;
create sequence localisation_numlocalisation_seq;
create sequence panier_numpanier_seq;
create sequence participant_numparticipant_seq;
create sequence photo_numfichierphoto_seq;
create sequence piste_numpiste_seq;
create sequence pointfort_numpointfort_seq;
create sequence regroupementclub_numregroupement_seq;
create sequence reservation_numreservation_seq;
create sequence resort_numresort_seq;
create sequence restaurant_numrestaurant_seq;
create sequence trancheage_numtrancheage_seq;
create sequence transport_numtransport_seq;
create sequence typeactivite_numtypeactivite_seq;
create sequence typechambre_numtype_seq;
create sequence typeclub_numtypeclub_seq;
create sequence video_numfichiervideo_seq;
create sequence partenaire_numpartenaire_seq;
create sequence cartebancaire_idcarte_seq;

-- ========================================
-- Tables
-- ========================================

create table partenaire (
    numpartenaire        int4 default nextval('partenaire_numpartenaire_seq') not null,
    nompartenaire        varchar(100)           not null,
    emailpartenaire      varchar(100)           not null,
    constraint pk_partenaire primary key (numpartenaire),
    constraint uk_partenaire_email unique (emailpartenaire)
);

create table typeactivite (
    numtypeactivite      int4 default nextval('typeactivite_numtypeactivite_seq') not null,
    nomtypeactivite      varchar(25)            not null,
    desctypeactivite     text                   null,
    nbactiviteincluses   int4                   null,
    nbactivitealacarte   int4                   null,
    constraint pk_typeactivite primary key (numtypeactivite),
    constraint ck_typeactivite_nb check (nbactiviteincluses >= 0 and nbactivitealacarte >= 0)
);

create table activite (
    numactivite          int4 default nextval('activite_numactivite_seq') not null,
    numtypeactivite      int4                   not null,
    nomactivite          varchar(100)            not null,
    dureeactivite        int4                   null,
    descriptionactivite  text                   null,
    agemin               int4                   null,
    frequence            varchar(20)            null,
    estincluse           bool                   null,
    constraint pk_activite primary key (numactivite),
    constraint ck_activite_duree check (dureeactivite > 0),
    constraint ck_activite_agemin check (agemin >= 0)
);

create table activitealacarte (
    numactivite          int4                   not null,
    numpartenaire        int4                   not null,
    prixmin              decimal(10,2)          not null,
    constraint pk_activitealacarte primary key (numactivite),
    constraint ck_activitealacarte_prix check (prixmin >= 0)
);

create table regroupementclub (
    numregroupement      int4 default nextval('regroupementclub_numregroupement_seq') not null,
    nomregroupement      varchar(25)            not null,
    descregroupement     text                   null,
    constraint pk_regroupementclub primary key (numregroupement)
);

create table pays (
    codepays             varchar(10)            not null,
    nompays              varchar(100)           not null,
    constraint pk_pays primary key (codepays)
);

create table resort (
    numresort            int4 default nextval('resort_numresort_seq') not null,
    codepays             varchar(10)            not null,
    nomresort            varchar(100)           not null,
    descriptionresort    text                   null,
    moyenneavis          decimal(3,2)           null,
    nbchambrestotal      int4                   null,
    nbtridents           int4                   null,
    constraint pk_resort primary key (numresort),
    constraint ck_resort_moyenneavis check (moyenneavis is null or (moyenneavis >= 0 and moyenneavis <= 5)),
    constraint ck_resort_nbchambres check (nbchambrestotal >= 0),
    constraint ck_resort_tridents check (nbtridents >= 0 and nbtridents <= 5)
);

create table documentation (
    numdocumentation     int4 default nextval('documentation_numdocumentation_seq') not null,
    numresort            int4                   not null,
    titredoc             varchar(50)            not null,
    url                  text                   not null,
    formatdoc            varchar(10)            null,
    constraint pk_documentation primary key (numdocumentation)
);

create table domaineskiable (
    numdomaine           int4 default nextval('domaineskiable_numdomaine_seq') not null,
    numresort            int4                   not null,
    nomdomaine           varchar(100)           not null,
    nomstation           varchar(100)           null,
    altitudeclub         decimal(10,2)          null,
    altitudestation      decimal(10,2)          null,
    longueurpiste        decimal(10,2)          null,
    nbpiste              int4                   null,
    skiaupied            bool                   null,
    descriptiondomaine   text                   null,
    constraint pk_domaineskiable primary key (numdomaine),
    constraint ck_domaine_altitude check (altitudeclub >= 0 and altitudestation >= 0),
    constraint ck_domaine_longueur check (longueurpiste >= 0),
    constraint ck_domaine_nbpiste check (nbpiste >= 0)
);

create table appartenir (
    numregroupement      int4                   not null,
    numresort            int4                   not null,
    constraint pk_appartenir primary key (numregroupement, numresort)
);

create table client (
    numclient            int4 default nextval('client_numclient_seq') not null,
    nomclient            varchar(100)           not null,
    prenomclient         varchar(100)           not null,
    emailclient          varchar(100)           not null,
    genreclient          varchar(5)             null,
    datenaissance        date                   not null,
    telephone            varchar(10)            not null,
    numrue               int4                   not null,
    nomrue               varchar(100)           not null,
    codepostal           varchar(5)            not null,
    ville                varchar(100)           not null,
    password             varchar(1000)          null,
    login                varchar(100)           null,
    constraint pk_client primary key (numclient),
    constraint uk_client_email unique (emailclient),
    constraint uk_client_login unique (login),
    constraint ck_client_genre check (genreclient in ('M', 'F', 'Autre', null)),
    constraint ck_client_datenaissance check (datenaissance < current_date)
);

create table cartebancaire (
    idcarte              int4 default nextval('cartebancaire_idcarte_seq') not null,
    numclient            int4                   not null,
    numeromasque         varchar(255)           not null,
    dateexpiration       date                   not null,
    nomtitulaire         varchar(255)           not null,
    tokenpaiement        varchar(255)           not null,
    constraint pk_cartebancaire primary key (idcarte),
    constraint ck_carte_expiration check (dateexpiration >= current_date)
);

create table panier (
    numpanier            int4 default nextval('panier_numpanier_seq') not null,
    numclient            int4                   not null,
    datecreation         date                   null,
    prixpanier           decimal(10,2)          null,
    constraint pk_panier primary key (numpanier),
    constraint ck_panier_prix check (prixpanier >= 0)
);

create table avis (
    numavis              int4 default nextval('avis_numavis_seq') not null,
    numclient            int4                   not null,
    numresort            int4                   not null,
    noteavis             decimal(3,2)           not null,
    commentaire          text                   not null,
    datepublication      date                   not null,
    constraint pk_avis primary key (numavis),
    constraint ck_avis_note check (noteavis >= 0 and noteavis <= 5)
);

create table typechambre (
    numtype              int4 default nextval('typechambre_numtype_seq') not null,
    nomtype              varchar(100)            not null,
    surface              decimal(10,2)          null,
    capacitemax          int4                   null,
    textepresentation    text                   null,
    prixdebase           decimal(10,2)          not null,
    constraint pk_typechambre primary key (numtype),
    constraint ck_typechambre_surface check (surface > 0),
    constraint ck_typechambre_capacite check (capacitemax > 0),
    constraint ck_typechambre_prix check (prixdebase >= 0)
);

create table chambre (
    idchambre            int4 default nextval('chambre_idchambre_seq') not null,
    numtype              int4                   not null,
    numchambre           int4                   not null,
    etat                 varchar(25)            null,
    constraint pk_chambre primary key (idchambre),
    constraint ck_chambre_etat check (etat in ('Disponible', 'Occupée', 'Maintenance', 'Hors service', null))
);

create table transport (
    numtransport         int4 default nextval('transport_numtransport_seq') not null,
    nomtransport         varchar(50)            not null,
    prixtransport        decimal(10,2)          not null,
    constraint pk_transport primary key (numtransport),
    constraint ck_transport_prix check (prixtransport >= 0)
);

create table reservation (
    numreservation       int4 default nextval('reservation_numreservation_seq') not null,
    numclient            int4                   not null,
    numtransport         int4                   null,
    numpanier            int4                   not null,
    statut               varchar(50)            null,
    nbpersonnes          int4                   null,
    prixtotal            decimal(10,2)          null,
    datedebut            date                   not null,
    datefin              date                   not null,
    constraint pk_reservation primary key (numreservation),
    constraint ck_reservation_dates check (datedebut < datefin),
    constraint ck_reservation_nbpersonnes check (nbpersonnes > 0),
    constraint ck_reservation_prixtotal check (prixtotal >= 0),
    constraint ck_reservation_statut check (statut in ('En attente', 'Confirmée', 'Annulée', 'Terminée', null))
);

create table choisir (
    numreservation       int4                   not null,
    numtype              int4                   not null,
    constraint pk_choisir primary key (numreservation, numtype)
);

create table trancheage (
    numtrancheage        int4 default nextval('trancheage_numtrancheage_seq') not null,
    libelletrancheage    varchar(25)            not null,
    agemax               int4                   null,
    agemin               int4                   null,
    constraint pk_trancheage primary key (numtrancheage),
    constraint ck_trancheage_ages check (agemin >= 0 and (agemax is null or agemax >= agemin))
);

create table cibler (
    numactivite          int4                   not null,
    numtrancheage        int4                   not null,
    constraint pk_cibler primary key (numactivite, numtrancheage)
);

create table typeclub (
    numtypeclub          int4 default nextval('typeclub_numtypeclub_seq') not null,
    nomtypeclub          varchar(20)            not null,
    constraint pk_typeclub primary key (numtypeclub)
);

create table classer (
    numtypeclub          int4                   not null,
    numresort            int4                   not null,
    constraint pk_classer primary key (numtypeclub, numresort)
);

create table commodite (
    numcommodite         int4 default nextval('commodite_numcommodite_seq') not null,
    nomcommodite         varchar(50)            not null,
    typecommodite        varchar(25)            null,
    constraint pk_commodite primary key (numcommodite)
);

create table enregistrer (
    numactivite          int4                   not null,
    numreservation       int4                   not null,
    constraint pk_enregistrer primary key (numactivite, numreservation)
);

create table photo (
    numfichierphoto      int4 default nextval('photo_numfichierphoto_seq') not null,
    numresort            int4                   null,
    nomfichierphoto      varchar(255)           not null,
    cheminfichiervideo   text                   not null,
    formatphoto          varchar(10)            null,
    taillephoto          int4                   null,
    constraint pk_photo primary key (numfichierphoto),
    constraint ck_photo_taille check (taillephoto > 0)
);

create table illustrer (
    numfichierphoto      int4                   not null,
    numtype              int4                   not null,
    constraint pk_illustrer primary key (numfichierphoto, numtype)
);

create table lier (
    idchambre            int4                   not null,
    numreservation       int4                   not null,
    constraint pk_lier primary key (idchambre, numreservation)
);

create table localisation (
    numlocalisation      int4 default nextval('localisation_numlocalisation_seq') not null,
    nomlocalisation      varchar(100)           not null,
    constraint pk_localisation primary key (numlocalisation)
);

create table partager (
    numresort            int4                   not null,
    numtypeactivite      int4                   not null,
    constraint pk_partager primary key (numresort, numtypeactivite)
);

create table participant (
    numparticipant       int4 default nextval('participant_numparticipant_seq') not null,
    numreservation       int4                   not null,
    nomparticipant       varchar(100)           not null,
    prenomparticipant    varchar(100)           not null,
    genreparticipant     varchar(5)             null,
    datenaissanceparticipant date               not null,
    constraint pk_participant primary key (numparticipant),
    constraint ck_participant_genre check (genreparticipant in ('M', 'F', 'Autre', null))
);

create table piste (
    numpiste             int4 default nextval('piste_numpiste_seq') not null,
    numdomaine           int4                   not null,
    nompiste             varchar(50)            not null,
    typepiste            varchar(20)            null,
    constraint pk_piste primary key (numpiste),
    constraint ck_piste_type check (typepiste in ('Verte', 'Bleue', 'Rouge', 'Noire', null))
);

create table pointfort (
    numpointfort         int4 default nextval('pointfort_numpointfort_seq') not null,
    nompointfort         varchar(50)            not null,
    constraint pk_pointfort primary key (numpointfort)
);

create table posseder3 (
    numpointfort         int4                   not null,
    numtype              int4                   not null,
    constraint pk_posseder3 primary key (numpointfort, numtype)
);

create table posseder4 (
    numcommodite         int4                   not null,
    numtype              int4                   not null,
    constraint pk_posseder4 primary key (numcommodite, numtype)
);

create table proposer (
    numtype              int4                   not null,
    numresort            int4                   not null,
    constraint pk_proposer primary key (numtype, numresort)
);

create table recommander (
    numresort            int4                   not null,
    res_numresort        int4                   not null,
    constraint pk_recommander primary key (numresort, res_numresort),
    constraint ck_recommander_different check (numresort != res_numresort)
);

create table regrouper (
    codepays             varchar(10)            not null,
    numlocalisation      int4                   not null,
    constraint pk_regrouper primary key (codepays, numlocalisation)
);

create table restaurant (
    numrestaurant        int4 default nextval('restaurant_numrestaurant_seq') not null,
    numresort            int4                   not null,
    nomrestaurant        varchar(100)           not null,
    typerestaurant       varchar(12)            null,
    descriptionrestaurant text                  null,
    constraint pk_restaurant primary key (numrestaurant)
);

create table video (
    numfichiervideo      int4 default nextval('video_numfichiervideo_seq') not null,
    numresort            int4                   null,
    nomfichiervideo      varchar(255)           not null,
    cheminfichiervideo   text                   not null,
    dureevideo           int4                   null,
    formatvideo          varchar(10)            null,
    resolutionvideo      varchar(15)            null,
    taillevideo          int4                   null,
    constraint pk_video primary key (numfichiervideo),
    constraint ck_video_duree check (dureevideo > 0),
    constraint ck_video_taille check (taillevideo > 0)
);

-- ========================================
-- Contraintes de clés étrangères
-- ========================================

alter table activite
    add constraint fk_activite_typeactivite foreign key (numtypeactivite)
      references typeactivite (numtypeactivite)
      on delete restrict on update restrict;

alter table activitealacarte
    add constraint fk_activitealacarte_activite foreign key (numactivite)
      references activite (numactivite)
      on delete restrict on update restrict;

alter table activitealacarte
    add constraint fk_activitealacarte_partenaire foreign key (numpartenaire)
      references partenaire (numpartenaire)
      on delete restrict on update restrict;

alter table appartenir
    add constraint fk_appartenir_regroupement foreign key (numregroupement)
      references regroupementclub (numregroupement)
      on delete restrict on update restrict;

alter table appartenir
    add constraint fk_appartenir_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table avis
    add constraint fk_avis_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table avis
    add constraint fk_avis_client foreign key (numclient)
      references client (numclient)
      on delete restrict on update restrict;

alter table cartebancaire
    add constraint fk_cartebancaire_client foreign key (numclient)
      references client (numclient)
      on delete cascade on update restrict;

alter table chambre
    add constraint fk_chambre_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table choisir
    add constraint fk_choisir_reservation foreign key (numreservation)
      references reservation (numreservation)
      on delete restrict on update restrict;

alter table choisir
    add constraint fk_choisir_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table cibler
    add constraint fk_cibler_activite foreign key (numactivite)
      references activite (numactivite)
      on delete restrict on update restrict;

alter table cibler
    add constraint fk_cibler_trancheage foreign key (numtrancheage)
      references trancheage (numtrancheage)
      on delete restrict on update restrict;

alter table classer
    add constraint fk_classer_typeclub foreign key (numtypeclub)
      references typeclub (numtypeclub)
      on delete restrict on update restrict;

alter table classer
    add constraint fk_classer_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table documentation
    add constraint fk_documentation_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table domaineskiable
    add constraint fk_domaineskiable_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table enregistrer
    add constraint fk_enregistrer_activitealacarte foreign key (numactivite)
      references activitealacarte (numactivite)
      on delete restrict on update restrict;

alter table enregistrer
    add constraint fk_enregistrer_reservation foreign key (numreservation)
      references reservation (numreservation)
      on delete restrict on update restrict;

alter table illustrer
    add constraint fk_illustrer_photo foreign key (numfichierphoto)
      references photo (numfichierphoto)
      on delete restrict on update restrict;

alter table illustrer
    add constraint fk_illustrer_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table lier
    add constraint fk_lier_chambre foreign key (idchambre)
      references chambre (idchambre)
      on delete restrict on update restrict;

alter table lier
    add constraint fk_lier_reservation foreign key (numreservation)
      references reservation (numreservation)
      on delete restrict on update restrict;

alter table panier
    add constraint fk_panier_client foreign key (numclient)
      references client (numclient)
      on delete cascade on update restrict;

alter table partager
    add constraint fk_partager_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table partager
    add constraint fk_partager_typeactivite foreign key (numtypeactivite)
      references typeactivite (numtypeactivite)
      on delete restrict on update restrict;

alter table participant
    add constraint fk_participant_reservation foreign key (numreservation)
      references reservation (numreservation)
      on delete restrict on update restrict;

alter table photo
    add constraint fk_photo_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table piste
    add constraint fk_piste_domaineskiable foreign key (numdomaine)
      references domaineskiable (numdomaine)
      on delete restrict on update restrict;

alter table posseder3
    add constraint fk_posseder3_pointfort foreign key (numpointfort)
      references pointfort (numpointfort)
      on delete restrict on update restrict;

alter table posseder3
    add constraint fk_posseder3_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table posseder4
    add constraint fk_posseder4_commodite foreign key (numcommodite)
      references commodite (numcommodite)
      on delete restrict on update restrict;

alter table posseder4
    add constraint fk_posseder4_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table proposer
    add constraint fk_proposer_typechambre foreign key (numtype)
      references typechambre (numtype)
      on delete restrict on update restrict;

alter table proposer
    add constraint fk_proposer_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table recommander
    add constraint fk_recommander_resort1 foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table recommander
    add constraint fk_recommander_resort2 foreign key (res_numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table regrouper
    add constraint fk_regrouper_pays foreign key (codepays)
      references pays (codepays)
      on delete restrict on update restrict;

alter table regrouper
    add constraint fk_regrouper_localisation foreign key (numlocalisation)
      references localisation (numlocalisation)
      on delete restrict on update restrict;

alter table reservation
    add constraint fk_reservation_panier foreign key (numpanier)
      references panier (numpanier)
      on delete restrict on update restrict;

alter table reservation
    add constraint fk_reservation_client foreign key (numclient)
      references client (numclient)
      on delete restrict on update restrict;

alter table reservation
    add constraint fk_reservation_transport foreign key (numtransport)
      references transport (numtransport)
      on delete restrict on update restrict;

alter table resort
    add constraint fk_resort_pays foreign key (codepays)
      references pays (codepays)
      on delete restrict on update restrict;

alter table restaurant
    add constraint fk_restaurant_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

alter table video
    add constraint fk_video_resort foreign key (numresort)
      references resort (numresort)
      on delete restrict on update restrict;

-- ========================================
-- Index pour optimisation des performances
-- ========================================

create index idx_activite_typeactivite on activite (numtypeactivite);
create index idx_activitealacarte_partenaire on activitealacarte (numpartenaire);
create index idx_appartenir_resort on appartenir (numresort);
create index idx_avis_resort on avis (numresort);
create index idx_avis_client on avis (numclient);
create index idx_cartebancaire_client on cartebancaire (numclient);
create index idx_chambre_typechambre on chambre (numtype);
create index idx_choisir_typechambre on choisir (numtype);
create index idx_cibler_trancheage on cibler (numtrancheage);
create index idx_classer_resort on classer (numresort);
create index idx_documentation_resort on documentation (numresort);
create index idx_domaineskiable_resort on domaineskiable (numresort);
create index idx_enregistrer_reservation on enregistrer (numreservation);
create index idx_illustrer_typechambre on illustrer (numtype);
create index idx_lier_reservation on lier (numreservation);
create index idx_panier_client on panier (numclient);
create index idx_partager_typeactivite on partager (numtypeactivite);
create index idx_participant_reservation on participant (numreservation);
create index idx_photo_resort on photo (numresort);
create index idx_piste_domaineskiable on piste (numdomaine);
create index idx_posseder3_typechambre on posseder3 (numtype);
create index idx_posseder4_typechambre on posseder4 (numtype);
create index idx_proposer_resort on proposer (numresort);
create index idx_recommander_resort2 on recommander (res_numresort);
create index idx_regrouper_localisation on regrouper (numlocalisation);
create index idx_reservation_transport on reservation (numtransport);
create index idx_reservation_client on reservation (numclient);
create index idx_reservation_panier on reservation (numpanier);
create index idx_resort_pays on resort (codepays);
create index idx_restaurant_resort on restaurant (numresort);
create index idx_video_resort on video (numresort);